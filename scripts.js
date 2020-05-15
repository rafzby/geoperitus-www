function toggleMobileMenu() {
    var menu = document.getElementById("mobileMenu");
    var hamburger = document.getElementById("mobileHamburger")

    if (menu.classList.contains("u-hidden")) {
        menu.classList.remove("u-hidden")
        hamburger.classList.add("c-hamburger--active")
    } else {
        menu.classList.add("u-hidden")
        hamburger.classList.remove("c-hamburger--active")
    }
}

(function () {
    document.querySelectorAll('.c-mobile-menu__item').forEach(item => {
        item.addEventListener('click', event => {
            toggleMobileMenu()
        })
    })
})();