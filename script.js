document.addEventListener("DOMContentLoaded", () => {
  // 1. ANIMATIONS AU SCROLL
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // 2. MENU MOBILE
  const iconMenu = document.querySelector(".icon-menu");
  const menu = document.querySelector(".menu");
  if (iconMenu) {
    iconMenu.addEventListener("click", () => {
      iconMenu.classList.toggle("active");
      menu.classList.toggle("active-menu");
    });
  }

  // 3. TABS SKILLS
  const controls = document.querySelectorAll(".control");
  const sections = document.querySelectorAll(".tab-section");
  controls.forEach((ctrl) => {
    ctrl.addEventListener("click", () => {
      const target = ctrl.dataset.tab;
      controls.forEach((c) => c.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
      ctrl.classList.add("active");
      document.querySelector(`.tab-section.${target}`).classList.add("active");
    });
  });

  // 4. INFINITE SLIDER
  const track = document.getElementById("slider-track");
  if (track) track.innerHTML += track.innerHTML;
});
