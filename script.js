const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const menu = document.querySelector("#nav-menu");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
    var navItems = document.getElementsByClassName("nav-item");
    for (let i = 0; i < navItems.length; ++i) {
        navItems[i].classList.remove("fadein")
        fadeIn(navItems[i], 200 + i * 80);
    }
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});



function fadeIn (item, delay) {
    setTimeout(() => {
        // item.removeEventListener("animationend"),
        item.classList.add("fadein") 
    }, delay);
}