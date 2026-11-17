import * as THREE from "./vendor/reconstruction/three.module.js";
import { OrbitControls } from "./vendor/reconstruction/OrbitControls.js";
import {
  Viewer,
  SceneRevealMode,
  SceneFormat,
} from "./vendor/reconstruction/gaussian-splats-3d.js";

import metadata from "./assets/reconstruction/metadata.json" with { type: "json" };
const ASSETS = "assets/reconstruction/";
const modelCache = new Map();

async function modelAsset(name, signal, onProgress, expectedBytes) {
  if (signal.aborted) throw new DOMException("Aborted", "AbortError");
  if (modelCache.has(name)) return modelCache.get(name);
  const local = ASSETS + name;
  const remote = globalThis.INSPECTION_ASSET_ORIGIN;
  const sources = remote ? [remote + local, local] : [local];
  let lastError;
  for (const url of sources) {
    const controller = new AbortController();
    const cancel = () => controller.abort();
    signal.addEventListener("abort", cancel, { once: true });
    let timer;
    const armTimeout = (ms) => {
      clearTimeout(timer);
      timer = setTimeout(cancel, ms);
    };
    try {
      armTimeout(url === local ? 15000 : 6000);
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw Error(`HTTP ${response.status}`);
      const total = expectedBytes || Number(response.headers.get("content-length"));
      const reader = response.body.getReader();
      const chunks = [];
      let bytes = 0;
      while (true) {
        armTimeout(url === local ? 30000 : 8000);
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        bytes += value.byteLength;
        onProgress(total ? Math.min(100, bytes / total * 100) : 0);
      }
      if (expectedBytes && bytes !== expectedBytes) throw Error("模型数据不完整");
      const blob = new Blob(chunks, { type: "application/octet-stream" });
      modelCache.set(name, blob);
      return blob;
    } catch (error) {
      if (signal.aborted) throw error;
      lastError = error;
    } finally {
      clearTimeout(timer);
      signal.removeEventListener("abort", cancel);
    }
  }
  throw lastError;
}

export class ReconstructionView {
  constructor(canvas, mode, onProject, onStatus, onReady, quality = "quick") {
    this.quality = quality;
    this.alive = true;
    this.mode = mode;
    this.onProject = onProject;
    this.onStatus = onStatus;
    this.abort = new AbortController();
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    this.renderer.setClearColor(0x0c1c26, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.01, 1000);
    this.camera.up.set(0, 0, 1);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.screenSpacePanning = true;
    this.controls.enableZoom = true;
    this.panMode = true;
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.alive) return;
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / Math.max(1, height);
      this.camera.updateProjectionMatrix();
    });
    this.resizeObserver.observe(canvas.parentElement);
    canvas.addEventListener(
      "keydown",
      (event) => {
        if (event.key.toLowerCase() === "r") this.reset();
        if (event.key === "+" || event.key === "=") this.zoom(1 / 1.15);
        if (event.key === "-") this.zoom(1.15);
      },
      { signal: this.abort.signal },
    );
    this.load(onReady);
    this.draw();
  }

  set panMode(value) {
    this.controls.mouseButtons.LEFT = value
      ? THREE.MOUSE.PAN
      : THREE.MOUSE.ROTATE;
    this.controls.mouseButtons.RIGHT = value
      ? THREE.MOUSE.ROTATE
      : THREE.MOUSE.PAN;
    this.controls.touches.ONE = value ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE;
    this.controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
  }

  async load(onReady) {
    try {
      this.onStatus(
        this.mode === "gaussian" ? "正在加载实景重建…" : "正在读取稀疏点云…",
      );
      this.metadata = metadata[this.mode === "gaussian" && this.quality === "quick" ? "quick" : this.mode];
      if (!this.alive) return;
      this.reset();
      if (this.mode === "gaussian") {
        this.viewer = new Viewer({
          renderer: this.renderer,
          camera: this.camera,
          threeScene: this.scene,
          rootElement: this.renderer.domElement.parentElement,
          selfDrivenMode: false,
          useBuiltInControls: false,
          sharedMemoryForWorkers: false,
          gpuAcceleratedSort: false,
          integerBasedSort: false,
          sphericalHarmonicsDegree: 0,
          sceneRevealMode: SceneRevealMode.Instant,
        });
        const quick = this.quality === "quick";
        const kind = quick ? "轻量模型" : "完整模型";
        const blob = await modelAsset(quick ? "scene-quick.spz" : "scene.splat",
          this.abort.signal,
          (percent) => { if (this.alive) this.onStatus(`正在下载${kind}… ${Math.round(percent)}%`); },
          quick ? metadata.quick.bytes : metadata.gaussian.count * 32);
        if (!this.alive) return;
        this.onStatus(`正在渲染${kind}…`);
        const blobURL = URL.createObjectURL(blob);
        try {
          const loading = this.viewer.addSplatScene(blobURL, {
            format: quick ? SceneFormat.Spz : SceneFormat.Splat,
            showLoadingUI: false,
            splatAlphaRemovalThreshold: 0,
          });
          // Await the native promise to catch route-change cancellation.
          await loading.promise;
        } finally {
          URL.revokeObjectURL(blobURL);
        }
      } else {
        const blob = await modelAsset("sparse_pc.ply", this.abort.signal, () => {}, metadata.sources["sparse_pc.ply"].bytes);
        const text = await blob.text();
        if (!this.alive) return;
        const rows = text
          .slice(text.indexOf("end_header") + 10)
          .trim()
          .split(/\r?\n/);
        const positions = [],
          colors = [];
        for (const line of rows) {
          const values = line.trim().split(/\s+/).map(Number);
          if (values.length < 6 || !values.slice(0, 6).every(Number.isFinite))
            continue;
          positions.push(...values.slice(0, 3));
          const color = new THREE.Color().setRGB(
            values[3] / 255,
            values[4] / 255,
            values[5] / 255,
            THREE.SRGBColorSpace,
          );
          colors.push(color.r, color.g, color.b);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3),
        );
        geometry.setAttribute(
          "color",
          new THREE.Float32BufferAttribute(colors, 3),
        );
        const material = new THREE.PointsMaterial({
          vertexColors: true,
          size: 2.5,
          sizeAttenuation: false,
        });
        this.pointMesh = new THREE.Points(geometry, material);
        this.scene.add(this.pointMesh);
      }
      if (!this.alive) return;
      this.ready = true;
      this.onStatus("");
      onReady(this.metadata.count);
    } catch (error) {
      if (this.alive)
        this.onStatus("模型加载失败，请切换视图重试。" + (error.message || ""));
    }
  }

  reset() {
    if (!this.metadata) return;
    const center = new THREE.Vector3(...this.metadata.center);
    const size = this.metadata.size;
    const aspect = this.camera.aspect || 1;
    const distance = size * Math.max(1.15, 1.15 / aspect);
    this.camera.position
      .copy(center)
      .add(
        new THREE.Vector3(0.12, -1, 0.5).normalize().multiplyScalar(distance),
      );
    this.camera.near = size / 1000;
    this.camera.far = size * 100;
    this.camera.updateProjectionMatrix();
    this.controls.target.copy(center);
    // This capture is best viewed near its acquisition position. An exterior
    // bounding-box view exposes the unobserved backs of the learned splats.
    if (this.mode === "gaussian") {
      this.camera.position.set(0, 0, 0);
      this.controls.target.set(0, 5, 0);
    }
    this.controls.minDistance = size * 0.025;
    this.controls.maxDistance = size * 15;
    this.controls.update();
  }

  zoom(factor) {
    const offset = this.camera.position
      .clone()
      .sub(this.controls.target)
      .multiplyScalar(factor);
    offset.clampLength(this.controls.minDistance, this.controls.maxDistance);
    this.camera.position.copy(this.controls.target).add(offset);
    this.controls.update();
  }

  draw() {
    if (!this.alive) return;
    this.frame = requestAnimationFrame(() => this.draw());
    this.controls.update();
    if (this.viewer && this.ready) {
      this.viewer.update();
      this.viewer.render();
    } else this.renderer.render(this.scene, this.camera);
    if (this.ready) {
      const { clientWidth: w, clientHeight: h } = this.renderer.domElement;
      const positions = this.metadata.anchors.map((p) => {
        const v = new THREE.Vector3(...p).project(this.camera);
        return [
          ((v.x + 1) * w) / 2,
          ((1 - v.y) * h) / 2,
          v.z > -1 && v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1,
        ];
      });
      this.onProject(positions);
    }
  }

  dispose() {
    if (!this.alive) return;
    this.alive = false;
    cancelAnimationFrame(this.frame);
    this.abort.abort();
    this.resizeObserver.disconnect();
    this.controls.dispose();
    this.pointMesh?.geometry.dispose();
    this.pointMesh?.material.dispose();
    const finish = () => {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    };
    if (this.viewer)
      Promise.resolve(this.viewer.dispose())
        .catch(() => {})
        .finally(finish);
    else finish();
  }
}
