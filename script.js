let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.getElementById("gen-button");

function gradientStyle() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", gradientStyle);
color2.addEventListener("input", gradientStyle);

function rgbGenerator(){
    let rgbGen1x = Math.floor(Math.random() * 256);
    let rgbGen2x = Math.floor(Math.random() * 256);
    let rgbGen3x = Math.floor(Math.random() * 256);

    let rgbGen1y = Math.floor(Math.random() * 256);
    let rgbGen2y = Math.floor(Math.random() * 256);
    let rgbGen3y = Math.floor(Math.random() * 256);

    let randomRgb1 = "rgb(" + rgbGen1x + ", " + rgbGen2x + ", " + rgbGen3x + ")";
    let randomRgb2 = "rgb(" + rgbGen3y + ", " + rgbGen1y + ", " + rgbGen2y + ")";

    body.style.background = "linear-gradient(to right, " + randomRgb1 + ", " + randomRgb2 + ")";
    css.textContent = body.style.background + ";";
}
    
button.addEventListener("click", rgbGenerator);