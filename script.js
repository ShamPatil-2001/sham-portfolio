const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const reveals = document.querySelectorAll(".reveal");
const skillToggles = document.querySelectorAll(".skill-toggle");

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((section, i) => {
  section.style.transitionDelay = `${i * 80}ms`;
  observer.observe(section);
});

skillToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".skill-card");
    if (!card) return;

    const isActive = card.classList.contains("active");

    document.querySelectorAll(".skill-card").forEach((item) => {
      item.classList.remove("active");
      const toggle = item.querySelector(".skill-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      card.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
