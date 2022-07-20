//Define

const box = document.querySelector(" .box");
let rows = document.getElementsByClassName("aRow");
let cells = document.getElementsByClassName("aCell");

let LAST_GRID_SIZE = 16;

//grid functions

function makeRow (rowNumber){
    for(let i = 0; i < rowNumber; i++ )
    {
        let row = document.createElement("div");
        box.appendChild(row).className="aRow";
    }
}

function makeColum (colNumber){
   
    for( let x=0; x < rows.length; x++)
    {
        for( let i = 0; i < colNumber; i++ )
        {
            let col = document.createElement("div");
            rows[x].appendChild(col).className="aCell";
        }
    }

}

function dewIt(size){
    if ( rows.length > 1 ) {
        
        let griddeleter = document.getElementsByClassName("aRow");

        while(griddeleter[0]) 
        {
            griddeleter[0].parentNode.removeChild(griddeleter[0]);
        }
        makeRow(size);
        makeColum(size);
        //We reset the listeners because they died
        let AllCells = Array.from(document.querySelectorAll(".aCell"));
        //       Change color when mouse is over
        AllCells.forEach( aCell => aCell.addEventListener('mouseover', function(){cellColorChanger(aCell);}));
        //      Change color on first click
        AllCells.forEach( aCell => aCell.addEventListener('mousedown', function(){clickColorChanger(aCell);}));
    } else {
    makeRow(size);
    makeColum(size);
    }
    LAST_GRID_SIZE = size;
}

////////////////////////

//We make the standard grid

dewIt(16);

//Change the color when user clicks

//  We check if mouse is down when we have the conditions

let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

//  Now the function to change color

//      We get the cells
let AllCells = Array.from(document.querySelectorAll(".aCell"));

//       Change color when mouse is over
AllCells.forEach( aCell => aCell.addEventListener('mouseover', function(){cellColorChanger(aCell);}));

//      Change color on first click

AllCells.forEach( aCell => aCell.addEventListener('mousedown', function(){clickColorChanger(aCell);}));

//      Changer function

//      We get the color of choice
const CHOSEN_COLOR = document.getElementById("cchanger");

function cellColorChanger(z){
    if(mouseDown == true)
    {
        z.style.backgroundColor= CHOSEN_COLOR.value;
    }

}

function clickColorChanger(z)
{
    z.style.backgroundColor= CHOSEN_COLOR.value;
}

//  Reset button

function reset()
{
    let AllCells = Array.from(document.querySelectorAll(".aCell"));
    for(let i = 0 ; i < AllCells.length ; i++)
    {
        AllCells[i].style.backgroundColor="white";
    }
}

// Grid size changer

function gridChanger()
{
    if (LAST_GRID_SIZE == 16)
    {
        dewIt(32);
        tempGrid();
    } else if (LAST_GRID_SIZE == 32)
    {
        dewIt(64);
        tempGrid();
    } else if (LAST_GRID_SIZE == 64)
    {
        dewIt(16);
        tempGrid();
    } 
}

function tempGrid()
{
    let AllCells = Array.from(document.querySelectorAll(".aCell"));
    for(let i = 0 ; i < AllCells.length ; i++)
    {
        AllCells[i].classList.add("temp-margin");
    }
    function removetrans(x){
        x.classList.remove("temp-margin");
    }
    for(let i = 0 ; i < AllCells.length ; i++)
    {
        setTimeout(function() {
            removetrans(AllCells[i]);
        }
            , 180)
        
    }
}
////////////////////////////////


