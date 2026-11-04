/* Self-contained WebGL point viewer. Scene and change mode are illustrative. */
window.ShoreCloud = class ShoreCloud {
  constructor(canvas, onProject, onStatus) {
    this.canvas = canvas;
    this.onProject = onProject;
    this.onStatus = onStatus;
    this.mode = "scene";
    this.panMode = true;
    this.epoch = "overlay";
    this.alive = true;
    this.reset();
    this.points = this.makeScene();
    this.gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!this.gl) {
      onStatus("当前浏览器不支持 WebGL，三维预览不可用。");
      return;
    }
    const g = this.gl;
    const shader = (type, source) => {
      const s = g.createShader(type);
      g.shaderSource(s, source);
      g.compileShader(s);
      if (!g.getShaderParameter(s, g.COMPILE_STATUS))
        throw Error(g.getShaderInfoLog(s));
      return s;
    };
    const vs = shader(
      g.VERTEX_SHADER,
      `attribute vec3 aPos;attribute vec3 aCol;uniform float uYaw,uPitch,uDist,uAspect,uSize;uniform vec2 uPan;varying vec3 vCol;void main(){float c=cos(uYaw),s=sin(uYaw),cp=cos(uPitch),sp=sin(uPitch);vec3 q=vec3(c*aPos.x-s*aPos.y,s*aPos.x+c*aPos.y,aPos.z);vec3 r=vec3(q.x,cp*q.y-sp*q.z,sp*q.y+cp*q.z);r.xy+=uPan;r.z-=uDist;gl_Position=vec4(r.x/(.42*uAspect),r.y/.42,-1.002*r.z-.2002,-r.z);gl_PointSize=uSize;vCol=aCol;}`,
    );
    const fs = shader(
      g.FRAGMENT_SHADER,
      `precision mediump float;varying vec3 vCol;void main(){vec2 d=gl_PointCoord-.5;if(dot(d,d)>.25)discard;gl_FragColor=vec4(vCol,.95);}`,
    );
    this.program = g.createProgram();
    g.attachShader(this.program, vs);
    g.attachShader(this.program, fs);
    g.linkProgram(this.program);
    if (!g.getProgramParameter(this.program, g.LINK_STATUS))
      throw Error("三维渲染初始化失败");
    g.useProgram(this.program);
    this.loc = {};
    for (const n of ["uYaw", "uPitch", "uDist", "uAspect", "uSize", "uPan"])
      this.loc[n] = g.getUniformLocation(this.program, n);
    this.buffers = [g.createBuffer(), g.createBuffer()];
    this.upload();
    this.abort = new AbortController();
    const signal = this.abort.signal;
    let dragging = false,
      lx = 0,
      ly = 0,
      pan = false;
    canvas.addEventListener("contextmenu", (e) => e.preventDefault(), {
      signal,
    });
    canvas.addEventListener(
      "pointerdown",
      (e) => {
        dragging = true;
        lx = e.clientX;
        ly = e.clientY;
        pan = e.shiftKey || e.button === 2 ? false : this.panMode;
        canvas.setPointerCapture(e.pointerId);
      },
      { signal },
    );
    canvas.addEventListener("pointerup", () => (dragging = false), { signal });
    canvas.addEventListener("pointercancel", () => (dragging = false), {
      signal,
    });
    canvas.addEventListener(
      "pointermove",
      (e) => {
        if (!dragging) return;
        const dx = e.clientX - lx,
          dy = e.clientY - ly;
        if (pan) {
          this.panX += dx * 0.006;
          this.panY -= dy * 0.006;
        } else {
          this.yaw += dx * 0.006;
          this.pitch = Math.max(-1.5, Math.min(-0.18, this.pitch + dy * 0.006));
        }
        lx = e.clientX;
        ly = e.clientY;
      },
      { signal },
    );
    canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        this.dist = Math.max(
          3.3,
          Math.min(18, this.dist * (e.deltaY > 0 ? 1.06 : 0.94)),
        );
      },
      { passive: false, signal },
    );
    canvas.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          this.reset();
        }
        if (
          [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "+",
            "-",
            "=",
          ].includes(e.key)
        ) {
          e.preventDefault();
          const rotate = e.shiftKey || !this.panMode;
          if (e.key === "ArrowLeft") {
            if (rotate) this.yaw -= 0.1;
            else this.panX -= 0.16;
          }
          if (e.key === "ArrowRight") {
            if (rotate) this.yaw += 0.1;
            else this.panX += 0.16;
          }
          if (e.key === "ArrowUp") {
            if (rotate) this.pitch = Math.max(-1.5, this.pitch - 0.08);
            else this.panY += 0.16;
          }
          if (e.key === "ArrowDown") {
            if (rotate) this.pitch = Math.min(-0.18, this.pitch + 0.08);
            else this.panY -= 0.16;
          }
          if (e.key === "+" || e.key === "=")
            this.dist = Math.max(3.3, this.dist - 0.4);
          if (e.key === "-") this.dist = Math.min(18, this.dist + 0.4);
        }
      },
      { signal },
    );
    onStatus("");
    this.draw();
  }
  reset() {
    this.yaw = -0.2;
    this.pitch = -0.93;
    this.dist = this.canvas?.clientWidth < 500 ? 11.5 : 9;
    this.panX = 0;
    this.panY = -0.1;
  }
  makeScene(epoch = "current") {
    const p = [],
      c = [];
    const put = (x, y, z, r, g, b) => {
      p.push(x, y, z);
      c.push(r, g, b);
    };
    for (let i = 0; i < 380; i++)
      for (let j = 0; j < 100; j++) {
        const x = -3.8 + i * 0.02,
          y = -0.82 + j * 0.017;
        let z =
          y < -0.25
            ? 0.1 + (y + 0.82) * 0.8
            : y < 0.35
              ? 0.556
              : 0.556 + (y - 0.35) * 0.1;
        const change = this.changeAt(x, y);
        if (epoch === "current") z += change;
        const mortar = i % 19 === 0 || j % 14 === 0 ? 0.52 : 0.87;
        const noise = (Math.sin(i * 91.77 + j * 19.4) * 0.5 + 0.5) * 0.12;
        const k = mortar - noise;
        const attached =
          epoch === "current" && x > 1.9 && x < 2.55 && y > -0.1 && y < 0.35;
        put(
          x,
          y,
          z,
          k * 0.83 * (attached ? 0.65 : 1),
          k * 0.89,
          k * 0.91 * (attached ? 0.7 : 1),
        );
      }
    for (let i = 0; i < 140; i++)
      for (let j = 0; j < 40; j++) {
        const x = -4 + i * 0.06,
          y = -2.35 + j * 0.037,
          z = 0.07 + Math.sin(x * 4 + y * 7) * 0.015;
        put(x, y, z, 0.1, 0.29 + Math.sin(i + j) * 0.015, 0.36);
      }
    for (let i = 0; i < 250; i++)
      for (let j = 0; j < 28; j++) {
        const x = -3.8 + i * 0.03,
          y = 0.87 + j * 0.027;
        put(x, y, 0.59, 0.2, 0.32, 0.29);
      }
    for (let x = -5; x <= 5; x += 0.09)
      for (const y of [-3, -2, -1, 0, 1, 2]) put(x, y, -0.03, 0.15, 0.26, 0.34);
    for (let y = -3; y <= 2; y += 0.09)
      for (const x of [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
        put(x, y, -0.03, 0.15, 0.26, 0.34);
    return { pos: new Float32Array(p), col: new Float32Array(c) };
  }
  changeAt(x, y) {
    if (Math.abs(x - 0.2) < 0.42 && y > -0.58 && y < 0.14) return -0.19;
    if (Math.abs(x + 2) < 0.055 && y > -0.5 && y < 0.45) return -0.075;
    if (x > 1.9 && x < 2.55 && y > -0.1 && y < 0.35) return 0.11;
    return 0;
  }
  makeComparison() {
    const base = this.makeScene("previous"),
      now = this.makeScene("current");
    const p = [],
      c = [];
    for (let i = 0; i < now.pos.length; i += 3) {
      const x = now.pos[i],
        y = now.pos[i + 1],
        changed = this.changeAt(x, y) !== 0 && i < 380 * 100 * 3;
      const add = (cloud, color) => {
        p.push(cloud.pos[i], cloud.pos[i + 1], cloud.pos[i + 2]);
        c.push(...color);
      };
      if (!changed) {
        add(this.epoch === "previous" ? base : now, [0.4, 0.51, 0.6]);
        continue;
      }
      if (
        this.epoch !== "current" &&
        (this.epoch !== "overlay" || (i / 3) % 4 === 0)
      )
        add(base, [0.33, 0.82, 0.88]);
      if (this.epoch !== "previous") add(now, [1, 0.57, 0.26]);
    }
    return { pos: new Float32Array(p), col: new Float32Array(c) };
  }
  setEpoch(epoch) {
    this.epoch = epoch;
    if (this.gl && this.mode === "change") {
      this.points = this.makeComparison();
      this.upload();
    }
  }
  upload() {
    const g = this.gl;
    g.useProgram(this.program);
    const colors = this.points.col;
    for (let i = 0; i < 2; i++) {
      g.bindBuffer(g.ARRAY_BUFFER, this.buffers[i]);
      g.bufferData(
        g.ARRAY_BUFFER,
        i === 0 ? this.points.pos : colors,
        g.STATIC_DRAW,
      );
      const l = g.getAttribLocation(this.program, i === 0 ? "aPos" : "aCol");
      g.enableVertexAttribArray(l);
      g.vertexAttribPointer(l, 3, g.FLOAT, false, 0, 0);
    }
  }
  async setMode(mode) {
    this.mode = mode;
    if (!this.gl) {
      this.onStatus("当前浏览器不支持 WebGL，三维预览不可用。");
      return;
    }
    if (mode === "raw") {
      this.onStatus("正在载入原工程 PLY 素材…");
      try {
        if (!this.raw) {
          const response = await fetch("assets/shoreline-sfm-web.ply");
          if (!response.ok) throw Error("点云文件读取失败");
          this.raw = this.parse(await response.arrayBuffer());
        }
        if (!this.alive || this.mode !== "raw") return;
        this.points = this.raw;
        this.upload();
        this.reset();
        this.onStatus("");
      } catch (e) {
        if (this.alive) this.onStatus(e.message);
      }
    } else {
      this.epoch = "overlay";
      this.points =
        mode === "change" ? this.makeComparison() : this.makeScene();
      this.upload();
      this.reset();
      this.onStatus("");
    }
  }
  parse(buffer) {
    const head = new TextDecoder().decode(
      new Uint8Array(buffer, 0, Math.min(4096, buffer.byteLength)),
    );
    const end = head.indexOf("end_header");
    if (end < 0) throw Error("PLY 格式无法识别");
    const start = head.indexOf("\n", end) + 1;
    const count = Number(head.match(/element vertex (\d+)/)?.[1]);
    if (!count) throw Error("点云为空");
    const view = new DataView(buffer, start),
      raw = [],
      col = [];
    let min = [Infinity, Infinity, Infinity],
      max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < count; i++) {
      const p = i * 27;
      for (let k = 0; k < 3; k++) {
        const v = view.getFloat64(p + k * 8, true);
        raw.push(v);
        min[k] = Math.min(min[k], v);
        max[k] = Math.max(max[k], v);
      }
      col.push(
        view.getUint8(p + 24) / 255,
        view.getUint8(p + 25) / 255,
        view.getUint8(p + 26) / 255,
      );
    }
    const span = Math.max(...max.map((v, i) => v - min[i]));
    for (let i = 0; i < raw.length; i++)
      raw[i] = ((raw[i] - (min[i % 3] + max[i % 3]) / 2) / span) * 7;
    return { pos: new Float32Array(raw), col: new Float32Array(col) };
  }
  project(p, w, h) {
    const [x, y, z] = p,
      c = Math.cos(this.yaw),
      s = Math.sin(this.yaw),
      cp = Math.cos(this.pitch),
      sp = Math.sin(this.pitch);
    const qx = c * x - s * y,
      qy = s * x + c * y,
      rx = qx + this.panX,
      ry = cp * qy - sp * z + this.panY,
      rz = sp * qy + cp * z - this.dist;
    return [
      ((rx / (-rz * 0.42 * (w / h))) * 0.5 + 0.5) * w,
      ((-ry / (-rz * 0.42)) * 0.5 + 0.5) * h,
    ];
  }
  draw() {
    if (!this.alive) return;
    const g = this.gl,
      cv = this.canvas,
      w = cv.clientWidth,
      h = cv.clientHeight,
      dpr = Math.min(devicePixelRatio || 1, 2);
    if (w && h) {
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      g.viewport(0, 0, cv.width, cv.height);
      g.clearColor(0, 0, 0, 0);
      g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
      g.enable(g.DEPTH_TEST);
      g.useProgram(this.program);
      g.uniform1f(this.loc.uYaw, this.yaw);
      g.uniform1f(this.loc.uPitch, this.pitch);
      g.uniform1f(this.loc.uDist, this.dist);
      g.uniform1f(this.loc.uAspect, w / h);
      g.uniform1f(this.loc.uSize, Math.max(1.5, Math.min(4, cv.width / 420)));
      g.uniform2f(this.loc.uPan, this.panX, this.panY);
      g.drawArrays(g.POINTS, 0, this.points.pos.length / 3);
      this.onProject(
        [
          [-2, -0.2, 0.481],
          [0.2, -0.35, 0.29],
          [2.2, 0.1, 0.666],
        ].map((p) => this.project(p, w, h)),
        this.mode !== "scene",
      );
    }
    this.frame = requestAnimationFrame(() => this.draw());
  }
  dispose() {
    this.alive = false;
    cancelAnimationFrame(this.frame);
    this.abort?.abort();
    if (this.gl) {
      for (const b of this.buffers) this.gl.deleteBuffer(b);
      this.gl.deleteProgram(this.program);
    }
  }
};
