(function () {
  "use strict";
  var countNode = document.getElementById("visitor-count");
  if (!countNode) return;

  var counterBase = "https://api.counterapi.dev/v1/robinlin2002-github-io/home";
  var isNewSession = !sessionStorage.getItem("ziyue-home-counted");
  fetch(counterBase + (isNewSession ? "/up" : ""))
    .then(function (response) { return response.ok ? response.json() : Promise.reject(); })
    .then(function (data) {
      if (isNewSession) sessionStorage.setItem("ziyue-home-counted", "1");
      var value = data && (data.count ?? data.value ?? data.result);
      countNode.textContent = value == null ? "—" : Number(value).toLocaleString();
    })
    .catch(function () { countNode.textContent = "—"; });
})();
