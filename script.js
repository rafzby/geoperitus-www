function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    
    if (menu.classList.contains("u-hidden")) {
        menu.classList.remove("u-hidden")
    } else {
        menu.classList.add("u-hidden")
    }
  } 