import "./sass/main.scss";

// trigger the nav
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav-close");
const navOverlay = document.querySelector("#navOverlay");

navToggle.addEventListener("click", () => {
	nav.classList.add("nav-show");
	navClose.classList.add("show");
	navOverlay.classList.add("nav-overlay");
});

navClose.addEventListener("click", () => {
	nav.classList.remove("nav-show");
	navClose.classList.remove("show");
	navOverlay.classList.remove("nav-overlay");
});
