grid = document.querySelector(".grid");
dimension = document.getElementById('dimension');
update = document.getElementById('update');
rainbow = document.getElementById('rainbow');
darken = document.getElementById('darken');
clear = document.getElementById('clear');
selection = document.querySelector('.selection');
clickSound = new Audio('assets/click.mp3');


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

const rainbowUp = (event) => {
    event.target.style.backgroundColor = generateRandomColor();
    event.target.classList.add('painted');
}

const darkenUp = (event) => {
    // Get current opacity
    let currentOpacity = parseFloat(getComputedStyle(event.target).opacity);

    // Decrease opacity by 10%, ensuring it doesn't go below 0
    currentOpacity = Math.max(0, currentOpacity - 0.1); // Ensure opacity doesn't go below 0

    // Apply the updated opacity
    event.target.style.opacity = currentOpacity;
}

const greyUp = (event) => {
    event.target.style.opacity = "1.0";
    event.target.style.backgroundColor = "grey";
    event.target.classList.add('painted');
}

//we use this to change the color of hovered over
grid.addEventListener("mouseover",(event)=>{

  if (event.target.classList.contains("grid-item")){

    if (rainbow.classList.contains('clicked') && darken.classList.contains('clicked')) {

        if (event.target.classList.contains('painted')) {
            darkenUp(event);
        }else{
            rainbowUp(event);
        }
        
    }else
    {
        if (rainbow.classList.contains('clicked')){
            event.target.style.opacity = "1.0";
            rainbowUp(event);
        }else if(darken.classList.contains('clicked')){
            darkenUp(event);
        }  
        else{
            greyUp(event);
        }
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
        gridItem.style.flex = `1 0 calc(100% / ${dimension} - 4px)`;
      }
}

update.addEventListener("click", () => {
    clickSound.play();
    if (dimension.value > 100 || dimension.value < 0 || dimension.value === ""){

        alert("Grid dimension must be an integer from 1-100");
    }else{
        console.log('this is valid');
        changeGrid(dimension.value);
    }
});

selection.addEventListener("click", (event) =>{
    if (event.target.id === "rainbow-img") {
        rainbow.classList.toggle("clicked");
        clickSound.play();
    }
    if (event.target.id === "eraser-img") {
        clickSound.play();
        darken.classList.toggle("clicked");
    }
    if (event.target.id === "clear" || event.target.id === "trash-img") {
        clickSound.play();
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((item) => {
          item.style.backgroundColor = "transparent";
          item.style.opacity = "1.0";
          item.classList.remove('painted');
      })
    }
  }
);







