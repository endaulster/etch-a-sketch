//Define

const box = document.querySelector(" .box");
let rows = document.getElementsByClassName("aRow");
let cells = document.getElementsByClassName("aCell");

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

    } else {
    makeRow(size);
    makeColum(size);
    }
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
const AllCells = Array.from(document.querySelectorAll(".aCell"));

//       Change color when mouse is over
AllCells.forEach( aCell => aCell.addEventListener('mouseover', function(){cellColorChanger(aCell);}));

//      Change color on first click

AllCells.forEach( aCell => aCell.addEventListener('mousedown', function(){clickColorChanger(aCell);}));

//      Changer function

function cellColorChanger(z){
    if(mouseDown == true)
    {
        z.style.cssText="background-color: black";
    }

}

function clickColorChanger(z)
{
    z.style.cssText="background-color: black";
}

////////////////////////////////
