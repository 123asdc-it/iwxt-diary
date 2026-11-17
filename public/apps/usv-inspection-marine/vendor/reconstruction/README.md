# Reconstruction viewer dependencies

- GaussianSplats3D 0.4.7, MIT: https://github.com/mkkellogg/GaussianSplats3D
- Three.js 0.170.0, MIT: https://github.com/mrdoob/three.js
- OrbitControls is included from Three.js 0.170.0.

Files are vendored from their npm release tarballs. The `three` bare import is
rewritten to `./three.module.js` for buildless, same-origin loading. Licenses
are included alongside the modules. No external CDN is needed at runtime.

The viewer uses non-shared worker memory so it works on GitHub Pages without
cross-origin isolation headers. Original source PLYs are retained outside the
published directory. The web `.splat` keeps all 317107 Gaussian primitives
with DC color, opacity, scale and rotation; higher-order SH is not included.
