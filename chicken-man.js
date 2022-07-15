//Define

const box = document.querySelector(" .box");
let rows = document.getElementsByClassName("aRow");
let cells = document.getElementsByClassName("aCell");

//functions

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

//We make the standard grid

dewIt(4);

//Change the color when user clicks

let boxSelection = document.querySelector(" .aCell");

boxSelection.addEventListener("mouseover", function(){
    console.log("lol");
}


);