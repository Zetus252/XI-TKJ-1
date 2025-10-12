const burger = document.getElementById("burger-icon");
const navMenu = document.getElementById("navbar-menu");

// Fungsi buat update ikon menu
function updateBurgerIcon(isActive) {
  burger.innerHTML = isActive
    ? '<i data-feather="x"></i>'
    : '<i data-feather="menu"></i>';
  feather.replace();
}

// Toggle menu saat ikon burger diklik
burger.addEventListener("click", (e) => {
  e.stopPropagation(); // biar klik di burger gak ikut ditangkap event global
  navMenu.classList.toggle("active");
  updateBurgerIcon(navMenu.classList.contains("active"));
});

// Tutup menu saat link di navbar diklik
document.querySelectorAll(".navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    updateBurgerIcon(false);
  });
});

// Tutup menu saat klik di luar navbar & burger
document.addEventListener("click", (e) => {
  if (
    !burger.contains(e.target) &&
    !navMenu.contains(e.target) &&
    navMenu.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    updateBurgerIcon(false);
  }
});
