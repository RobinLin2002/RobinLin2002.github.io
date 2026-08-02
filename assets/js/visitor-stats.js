(function () {
  "use strict";

  var locationNode = document.getElementById("visitor-location");
  var countNode = document.getElementById("visitor-count");
  var mapNode = document.getElementById("visitor-map");

  if (!locationNode || !countNode || !mapNode) return;

  function showLocation(data) {
    if (!data || data.success === false || !Number.isFinite(data.latitude) || !Number.isFinite(data.longitude)) {
      locationNode.textContent = "Location unavailable";
      return;
    }

    var place = [data.city, data.region, data.country].filter(Boolean);
    locationNode.textContent = (data.flag && data.flag.emoji ? data.flag.emoji + " " : "") + place.join(", ");

    var lat = data.latitude;
    var lon = data.longitude;
    var delta = 0.18;
    var bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
    var iframe = document.createElement("iframe");
    iframe.title = "Map showing your approximate IP-based location";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer";
    iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=" + encodeURIComponent(bbox) + "&layer=mapnik&marker=" + encodeURIComponent(lat + "," + lon);
    mapNode.replaceChildren(iframe);
  }

  function showCount(data) {
    var value = data && (data.count ?? data.value ?? data.result);
    countNode.textContent = value == null ? "—" : Number(value).toLocaleString();
  }

  fetch("https://ipwho.is/?fields=success,city,region,country,latitude,longitude,flag.emoji")
    .then(function (response) { return response.ok ? response.json() : Promise.reject(); })
    .then(showLocation)
    .catch(function () { locationNode.textContent = "Location unavailable"; });

  var counterBase = "https://api.counterapi.dev/v1/robinlin2002-github-io/home";
  var isNewSession = !sessionStorage.getItem("ziyue-home-counted");
  var counterUrl = counterBase + (isNewSession ? "/up" : "");

  fetch(counterUrl)
    .then(function (response) { return response.ok ? response.json() : Promise.reject(); })
    .then(function (data) {
      if (isNewSession) sessionStorage.setItem("ziyue-home-counted", "1");
      showCount(data);
    })
    .catch(function () { countNode.textContent = "—"; });
})();
