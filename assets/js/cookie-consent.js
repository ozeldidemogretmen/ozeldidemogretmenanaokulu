(function () {
  var KEY = "didem-anaokulu-cookie-2026";
  var banner = document.getElementById("cookie-banner");
  if (!banner) return;

  try {
    if (localStorage.getItem(KEY)) return;
  } catch (e) {}

  banner.classList.add("visible");

  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    banner.classList.remove("visible");
  }

  var accept = document.getElementById("cookie-accept");
  var reject = document.getElementById("cookie-reject");
  if (accept) accept.addEventListener("click", function () { save("accepted"); });
  if (reject) reject.addEventListener("click", function () { save("rejected"); });
})();
