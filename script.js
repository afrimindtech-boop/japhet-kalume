const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");

iconMenu.onclick = function () {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active-menu");
};

const controls = document.querySelectorAll(".control");
const tabs = document.querySelectorAll(".tab-section");

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const target = control.dataset.tab;

    // reset controls
    controls.forEach((c) => c.classList.remove("active"));

    // reset tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // activate selected
    control.classList.add("active");
    document.querySelector(`.${target}`).classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("slider-track");
  const items = track.innerHTML;

  // On double le contenu pour permettre le scroll infini fluide
  track.innerHTML = items + items;
});

// Gestionnaire d'événements pour les cartes
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    console.log(`Navigation vers le projet : ${title}`);
  });
});

// Animation du bouton "New"
const newBtn = document.querySelector(".add-project-btn");
newBtn.addEventListener("click", () => {
  // Logique d'ajout ou de redirection
  newBtn.style.transform = "scale(0.98)";
  setTimeout(() => (newBtn.style.transform = "scale(1)"), 100);
});
// On attend que le DOM soit chargé pour attacher les écouteurs
document.addEventListener("DOMContentLoaded", () => {
  const contactItems = document.querySelectorAll(".contact-item");

  // Effet de feedback au clic sur les éléments de contact
  contactItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.querySelector("span").innerText;

      // Simulation d'une action de copie ou d'ouverture
      console.log(`Action sur : ${text}`);

      // Animation flash subtile
      item.style.backgroundColor = "#222";
      setTimeout(() => {
        item.style.backgroundColor = "transparent";
      }, 200);
    });
  });

  // Gestion des liens de réseaux sociaux
  const socialLinks = document.querySelectorAll(".social-links a");
  socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log(`Navigation vers : ${e.target.innerText}`);
    });
  });
});
