// =============================
// MOBILE NAVIGATION
// =============================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show-menu");

    menuToggle.classList.toggle("active");


    // Accessibility

    const menuIsOpen =
        navLinks.classList.contains("show-menu");


    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


// =============================
// CLOSE MENU AFTER CLICK
// =============================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show-menu");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});