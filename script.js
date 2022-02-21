const colorPiker1 = document.querySelector("#color-1");
const colorPiker2 = document.querySelector("#color-2");
const h3 = document.querySelector("h3");
const background = document.querySelector("body");
const iCopy = document.querySelector("i");
const spanTooltip = document.querySelector("span");

// background default values
background.style.setProperty("--color-1", colorPiker1.value);
background.style.setProperty("--color-2", colorPiker2.value);

// background color picker values
addEventListener("input", (event) => {
    if (event.target.id === "color-1") {
        background.style.setProperty("--color-1", event.target.value);
    } else if (event.target.id === "color-2") {
        background.style.setProperty("--color-2", event.target.value);
    }
    let color1 = getComputedStyle(background).getPropertyValue("--color-1");
    let color2 = getComputedStyle(background).getPropertyValue("--color-2");
    h3.innerText = `linear-gradient(to right, ${color1}, ${color2});`

    if (h3.innerText.includes("linear")) {
        iCopy.classList.add("visible");
    }
});

// Copy to clipboard
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
}

iCopy.addEventListener("click", () => {
    copyToClipboard(h3.innerText);
});