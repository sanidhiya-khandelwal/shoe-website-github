function myFunction() {
    const hamburgerLinks = document.getElementsByClassName('hamburger-links')[0]
    if (hamburgerLinks.style.display === "none") {
        hamburgerLinks.style.display = "flex";
    } else {
        hamburgerLinks.style.display = "none"
    }
}

const cart = () => {
    const add = document.getElementsByClassName("buy")[0].innerHTML;
    let count = document.getElementById('count-symbol').innerHTML;
    let cartCount = parseInt(count) + 1;
    document.getElementById('count-symbol').innerHTML = cartCount;
}