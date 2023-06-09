function myFunction() {
    const hamburgerLinks = document.getElementsByClassName('hamburger-links')[0]
    if (hamburgerLinks.style.display === "none") {
        hamburgerLinks.style.display = "flex";
    } else {
        hamburgerLinks.style.display = "none"
    }
}