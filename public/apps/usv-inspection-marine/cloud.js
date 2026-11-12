/* PLY-only WebGL viewer; markers are explicitly illustrative anchors on loaded points. */
window.ShoreCloud = class ShoreCloud {
  constructor(canvas, onProject, onStatus) {
    this.canvas = canvas;
    this.onProject = onProject;
    this.onStatus = onStatus;
    this.mode = "raw";
    this.panMode = true;
    this.epoch = "overlay";
    this.alive = true;
    this.reset();
    this.points = { pos: new Float32Array(), col: new Float32Array() };
    this.anchors = [];
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
    this.panX = 0;
    this.panY = 0;
    this.dist = 11;
    if (!this.points?.pos.length) return;
    const rotated = [];
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;
    const c = Math.cos(this.yaw),
      s = Math.sin(this.yaw),
      cp = Math.cos(this.pitch),
      sp = Math.sin(this.pitch);
    for (let i = 0; i < this.points.pos.length; i += 3) {
      const [x, y, z] = this.points.pos.subarray(i, i + 3);
      const qx = c * x - s * y,
        qy = s * x + c * y;
      const ry = cp * qy - sp * z,
        rz = sp * qy + cp * z;
      rotated.push([qx, ry, rz]);
      minX = Math.min(minX, qx);
      maxX = Math.max(maxX, qx);
      minY = Math.min(minY, ry);
      maxY = Math.max(maxY, ry);
    }
    this.panX = -(minX + maxX) / 2;
    this.panY = -(minY + maxY) / 2;
    const aspect =
      (this.canvas.clientWidth || 1) / (this.canvas.clientHeight || 1);
    let distance = 4;
    for (const [x, y, z] of rotated)
      distance = Math.max(
        distance,
        z +
          Math.max(
            Math.abs(x + this.panX) / (0.42 * aspect * 0.8),
            Math.abs(y + this.panY) / (0.42 * 0.8),
          ),
      );
    this.dist = Math.min(18, distance);
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
    if (!this.gl) return;
    this.mode = "raw";
    this.onStatus("正在读取 PLY 点云…");
    try {
      const response = await fetch(
        this.sourceUrl || "assets/shoreline-sfm-web.ply",
      );
      if (!response.ok) throw Error("点云文件读取失败");
      const points = this.parse(await response.arrayBuffer());
      if (!this.alive) return;
      this.points = points;
      // Attach illustrative markers to actual retained vertices, never screen pixels.
      this.anchors = [-0.9, 0, 0.9].map((x) => {
        let best = Infinity,
          point = [0, 0, 0];
        for (let i = 0; i < points.pos.length; i += 3) {
          const d =
            (points.pos[i] - x) ** 2 +
            points.pos[i + 1] ** 2 +
            points.pos[i + 2] ** 2;
          if (d < best) {
            best = d;
            point = Array.from(points.pos.slice(i, i + 3));
          }
        }
        return point;
      });
      this.upload();
      this.reset();
      this.onStatus("");
    } catch (error) {
      if (this.alive) this.onStatus(error.message);
    }
  }
  parse(buffer) {
    const bytes = new Uint8Array(buffer);
    const header = new TextDecoder().decode(
      bytes.subarray(0, Math.min(bytes.length, 65536)),
    );
    const end = header.indexOf("end_header");
    if (end < 0) throw Error("PLY 文件头无法识别");
    const offset = header.indexOf("\n", end) + 1;
    const lines = header.slice(0, end).split(/\r?\n/);
    const format = lines.find((l) => l.startsWith("format "))?.split(" ")[1];
    let count = 0,
      inVertex = false,
      props = [];
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts[0] === "element") {
        inVertex = parts[1] === "vertex";
        if (inVertex) count = +parts[2];
      } else if (parts[0] === "property" && inVertex) {
        if (parts[1] === "list") throw Error("不支持顶点列表属性");
        props.push({ type: parts[1], name: parts[2] });
      }
    }
    const types = {
      char: [1, "getInt8"],
      int8: [1, "getInt8"],
      uchar: [1, "getUint8"],
      uint8: [1, "getUint8"],
      short: [2, "getInt16"],
      int16: [2, "getInt16"],
      ushort: [2, "getUint16"],
      uint16: [2, "getUint16"],
      int: [4, "getInt32"],
      int32: [4, "getInt32"],
      uint: [4, "getUint32"],
      uint32: [4, "getUint32"],
      float: [4, "getFloat32"],
      float32: [4, "getFloat32"],
      double: [8, "getFloat64"],
      float64: [8, "getFloat64"],
    };
    let stride = 0;
    for (const p of props) {
      if (!types[p.type]) throw Error("不支持的 PLY 属性类型");
      p.offset = stride;
      stride += types[p.type][0];
    }
    if (
      !count ||
      !["x", "y", "z"].every((n) => props.some((p) => p.name === n))
    )
      throw Error("PLY 缺少有效顶点");
    if (
      !["ascii", "binary_little_endian", "binary_big_endian"].includes(format)
    )
      throw Error("不支持的 PLY 编码");
    if (format !== "ascii" && offset + count * stride > buffer.byteLength)
      throw Error("PLY 数据不完整");
    const rows =
      format === "ascii"
        ? new TextDecoder().decode(bytes.subarray(offset)).trim().split(/\r?\n/)
        : null;
    const view = new DataView(buffer),
      raw = [],
      colors = [],
      axes = [[], [], []];
    const step = Math.max(1, Math.ceil(count / 500000));
    for (let i = 0; i < count; i += step) {
      let values = {};
      const row = rows?.[i]?.trim().split(/\s+/);
      props.forEach((p, j) => {
        values[p.name] = rows
          ? Number(row?.[j])
          : view[types[p.type][1]](
              offset + i * stride + p.offset,
              format === "binary_little_endian",
            );
      });
      const xyz = [values.x, values.y, values.z];
      if (!xyz.every(Number.isFinite)) continue;
      raw.push(xyz);
      xyz.forEach((v, k) => axes[k].push(v));
      colors.push(
        ["red", "green", "blue"].map((n) =>
          Math.max(0, Math.min(1, (values[n] ?? 180) / 255)),
        ),
      );
    }
    if (!raw.length) throw Error("PLY 没有可用坐标");
    // Robust framing: sparse far-away reconstruction outliers must not shrink the scene.
    const bounds = axes.map((a) => {
      a.sort((x, y) => x - y);
      return [
        a[Math.floor(a.length * 0.01)],
        a[Math.min(a.length - 1, Math.floor(a.length * 0.99))],
      ];
    });
    const span = Math.max(...bounds.map(([lo, hi]) => hi - lo));
    if (!span) throw Error("点云范围无效");
    const pos = [],
      col = [];
    raw.forEach((p, i) => {
      if (p.some((v, k) => v < bounds[k][0] || v > bounds[k][1])) return;
      p.forEach((v, k) =>
        pos.push(((v - (bounds[k][0] + bounds[k][1]) / 2) / span) * 7),
      );
      col.push(...colors[i]);
    });
    return { pos: new Float32Array(pos), col: new Float32Array(col) };
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
        this.anchors.map((p) => this.project(p, w, h)),
        !this.anchors.length,
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
