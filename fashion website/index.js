let mainPage = document.querySelector(".main");
let carts = document.querySelector(".Trends");
let blog = document.querySelector(".blogs");
let aboutus = document.querySelector(".abouts");
let footer = document.querySelector(".contacts");


function homes() {
    mainPage.style.display = "block";
    carts.forEach((element) => element.style.display = "none");
    blog.forEach((element) => element.style.display = "none");
    aboutus.forEach((element) => element.style.display = "none");
    footer.forEach((element) => element.style.display = "none");
}

function shops() {
    mainPage.style.display = "none";
    carts.forEach((element) => element.style.display = "block");
    blog.forEach((element) => element.style.display = "none");
    aboutus.forEach((element) => element.style.display = "none");
    footer.forEach((element) => element.style.display = "none");
}

function blogs() {
    mainPage.style.display = "none";
    carts.forEach((element) => element.style.display = "none");
    blog.forEach((element) => element.style.display = "block");
    aboutus.forEach((element) => element.style.display = "none");
    footer.forEach((element) => element.style.display = "none");
}

function abouts() {
    mainPage.style.display = "none";
    carts.forEach((element) => element.style.display = "none");
    blog.forEach((element) => element.style.display = "none");
    aboutus.forEach((element) => element.style.display = "block");
    footer.forEach((element) => element.style.display = "none");
}

function contacts() {
    mainPage.style.display = "none";
    carts.forEach((element) => element.style.display = "none");
    blog.forEach((element) => element.style.display = "none");
    aboutus.forEach((element) => element.style.display = "none");
    footer.forEach((element) => element.style.display = "block");



}
