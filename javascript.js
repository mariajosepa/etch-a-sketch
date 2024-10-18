
grid = document.querySelector(".grid");
dimension = document.getElementById('dimension');
update = document.getElementById('update');


document.addEventListener("DOMContentLoaded",() =>{

  for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  }
})

const changeGrid = (dimension) => {

    grid.textContent = "";

    let numChildren = dimension * dimension;

    for (let i = 0; i < numChildren; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        grid.appendChild(gridItem);
        gridItem.style.flex = `1 0 calc(100% / ${dimension} - 1.5px)`;
      }
}


update.addEventListener("click", () => {
    if (dimension.value > 100 || dimension.value < 0 || dimension.value === ""){

        alert("Grid dimension must be an integer from 1-100");
    }else{
        console.log('this is valid');
        changeGrid(dimension.value);
    }
});

