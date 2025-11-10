// This file contains the main JavaScript code for the interactive website.

document.addEventListener("DOMContentLoaded", () => {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbar = document.getElementById("navbar");
    const modalOpen = document.getElementById("modal-open");
    const modalClose = document.getElementById("modal-close");
    const modal = document.getElementById("modal");

    // Toggle navbar visibility on smaller screens
    navbarToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Open modal
    modalOpen.addEventListener("click", () => {
        modal.classList.add("active");
    });

    // Close modal
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});