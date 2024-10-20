
grid = document.querySelector(".grid");
dimension = document.getElementById('dimension');
update = document.getElementById('update');
rainbow = document.getElementById('rainbow');
darken = document.getElementById('darken');
selection = document.querySelector('.selection');


const generateRandomColor = () => {

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;  
}

document.addEventListener("DOMContentLoaded",() =>{

  for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  }

})

//we use this to change the color of hovered over
grid.addEventListener("mouseover",(event)=>{

  if (event.target.classList.contains("grid-item")){


    if (rainbow.classList.contains('clicked')){
      event.target.style.opacity = "1.0";
      event.target.style.backgroundColor = generateRandomColor();
      event.target.classList.add('painted');
    }else{
      event.target.style.backgroundColor = "grey";
      event.target.classList.add('painted');
    }

    if (darken.classList.contains('clicked')) {
      // Get current opacity
      let currentOpacity = parseFloat(getComputedStyle(event.target).opacity);

      // Decrease opacity by 10%, ensuring it doesn't go below 0
      currentOpacity = Math.max(0, currentOpacity - 0.1); // Ensure opacity doesn't go below 0

      // Apply the updated opacity
      event.target.style.opacity = currentOpacity;
    }
  

     
  }
});

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

selection.addEventListener("click", (event) =>{
    if (event.target.id === "rainbow" || event.target.id === "darken" || event.target.id === "update"){
        event.target.classList.toggle("clicked");
    }
});




