const grid = document.querySelector("#grid");

for(var i = 0 ; i < 16 ; i ++){
    const grid_row = document.createElement("div");
    grid.appendChild(grid_row);
    for(var j = 0 ; j < 16 ; j ++){
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