/* Qingdao demonstration route. Only a configured mapUrl is the host-controller page. */
window.createQingdaoMap = function (element, task, enabled) {
  if (!element || !window.L) return null;
  const route = task.route;
  const map = L.map(element, {
    scrollWheelZoom: false,
    minZoom: 10,
    maxZoom: 17,
    zoomControl: false,
  }).setView([36.06, 120.391], 13);
  L.control
    .zoom({ position: "topright", zoomInTitle: "放大", zoomOutTitle: "缩小" })
    .addTo(map);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
  }).addTo(map);
  const hint = document.querySelector("#mapLoading");
  let loaded = false;
  tiles.on("tileload", () => {
    loaded = true;
    if (hint) hint.hidden = true;
  });
  tiles.on("tileerror", () => {
    if (!loaded && hint) {
      hint.hidden = false;
      hint.textContent = "底图加载较慢，请稍候";
    }
  });
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);
  const path = L.polyline(route, {
    color: "#347d87",
    weight: 4,
    dashArray: "7 8",
  });
  const completed = L.polyline([route[0]], { color: "#08d5d1", weight: 5 });
  const boat = L.marker(route[0], {
    icon: L.divIcon({
      className: "vessel-map-marker",
      html: "<span>▲</span>",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    }),
  });
  if (enabled) {
    path.addTo(map);
    completed.addTo(map);
    boat.addTo(map);
  }
  const observer = new ResizeObserver(() => map.invalidateSize());
  observer.observe(element);
  return {
    setTime(fraction) {
      const progress = Math.max(0, Math.min(1, fraction)) * (route.length - 1);
      const i = Math.min(route.length - 2, Math.floor(progress)),
        t = progress - i;
      const point = route[i].map((v, k) => v + (route[i + 1][k] - v) * t);
      if (enabled) {
        boat.setLatLng(point);
        completed.setLatLngs([...route.slice(0, i + 1), point]);
      }
      return point;
    },
    fit() {
      map.fitBounds(L.latLngBounds(route).pad(0.7), { maxZoom: 14 });
    },
    dispose() {
      observer.disconnect();
      map.remove();
    },
  };
};
