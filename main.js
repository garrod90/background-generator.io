// selectors

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const background = document.querySelector("body")


// background.style.backgroundImage = "linear-gradient(to right, #0A017E, #E60000)";


// EVENT LISTENERS
color1.addEventListener("input", setColors)
color2.addEventListener("input", setColors)



// FUNCTIONS
function setColors() {
    background.style.backgroundImage = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = background.style.backgroundImage + ";";
}