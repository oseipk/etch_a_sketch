const container = document.getElementById("container");
const defaultColor = brown;
const defaultMode = "color";
const defaultSize = 16;

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

//set new Color when mouse hover on grid
function setCurrentColor(newColor){
    currentColor = newColor
}
// set new Mode when mouse move
function setCurrentMode(newMode){
    // activateButton(newMode);
    currentMode = newMode;
}
//change grid sizes
function setCurrentSize(newSize){
    currentSize = newSize
}
// Grid square divs #SETUP
function makeRows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i<(rows * cols); i++){
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        cell.addEventListener("mouseover", changeColor);
        container.appendChild(cell).className = "grid-item";
        
    };
};
makeRows(16,16);

//change color when mouse hover on it
function changeColor(e){
    if(currentMode ==="rainbow"){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.rndom() * 256);
        e.target.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`
        
    } else if( currentMode === "color"){
        e.target.style.background = "currentColor"
    }
}
