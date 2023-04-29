const menuOpen = document.getElementById("menuhamburg");
const buttonHamburger = document.getElementById("togglehamburg");
buttonHamburger.addEventListener("click", () => {
    buttonHamburger.classList.toggle("close");
    menuOpen.classList.toggle("open");
});
menuOpen.addEventListener("click", e => {
    if (e.target.id === "menuhamburg"); {
        menuOpen.classList.toggle("open");
        buttonHamburger.classList.remove("close");
    }
});