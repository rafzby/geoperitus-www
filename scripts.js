function toggleMobileMenu() {
    var menu = document.getElementById("mobileMenu");

    if (menu.classList.contains("u-hidden")) {
        menu.classList.remove("u-hidden")
    } else {
        menu.classList.add("u-hidden")
    }
}

(function () {
    document.querySelectorAll('.c-mobile-menu__item').forEach(item => {
        item.addEventListener('click', event => {
            toggleMobileMenu()
        })
    })
})();