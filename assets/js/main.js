document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-menu");
  var overlay = document.querySelector(".overlay");

  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove("active");
    toggle.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  function openMenu() {
    nav.classList.add("active");
    toggle.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("active")) closeMenu();
      else openMenu();
    });
  }
  if (overlay) overlay.addEventListener("click", closeMenu);
  document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) {
    el.textContent = "2026";
  });

  document.querySelectorAll(".photo-slot").forEach(function (slot) {
    var img = slot.querySelector("img.slot-photo") || slot.querySelector("img:not(.slot-fallback)");
    if (!img) return;
    function show() { slot.classList.remove("is-empty"); }
    function hide() { slot.classList.add("is-empty"); }
    img.addEventListener("load", function () {
      if (img.naturalWidth > 1) show();
      else hide();
    });
    img.addEventListener("error", hide);
    if (img.complete) {
      if (img.naturalWidth > 1) show();
      else hide();
    }
  });

  var cards = document.querySelectorAll(".workshop");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    cards.forEach(function (card) { io.observe(card); });
  } else {
    cards.forEach(function (card) { card.classList.add("is-in"); });
  }
});
