console.log("Script.js is working");

function hiddenmenuToggle(){
    const menu = document.querySelector(".invisible-nav");
    const button = document.querySelector("#menu-btn");
    if(menu.style.height === "250px"){
        menu.style.height = "0px";
        button.innerHTML = `<img src="./assets/hamburger-black.svg" alt="">`;
    } else {
        menu.style.height = "250px";
        button.innerHTML = `<img src="./assets/close.svg" alt="">`;
    }
}