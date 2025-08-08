"use strict";

const colorCode = document.querySelector("#color-code");
const genBtn = document.querySelector("#gen-btn");
const body = document.body;

function colorGenerator() {
    const values = "0123456789abcdef";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += values[Math.floor(Math.random() * values.length)];
    }
    return hex;
}

genBtn.addEventListener("click", function () {
    const newColor = colorGenerator(); // generate once
    colorCode.textContent = newColor;
    body.style.backgroundColor = newColor;
});
