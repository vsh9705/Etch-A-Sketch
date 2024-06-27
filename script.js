const grid = document.querySelector("#grid");

let pixelNumber = 16;

function createGrid (pixelNumber){
    grid.innerHTML = "";
    for(var i = 0 ; i < pixelNumber ; i ++){
        const grid_row = document.createElement("div");
        grid.appendChild(grid_row);
        for(var j = 0 ; j < pixelNumber ; j ++){
            const grid_col = document.createElement("div");
            grid_col.classList.add("pixel");
            grid_row.appendChild(grid_col);
        }
    }
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "blue";
        })
    })
}

createGrid(pixelNumber);

const input = document.querySelector("#input");

input.addEventListener("click", () => {
    let userInput = prompt("Enter number of pixels");
    if(userInput > 100){
        alert("number less than 100!");
        userInput = prompt("Enter number of pixels");
    }
    createGrid(userInput);
})