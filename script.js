const container = document.querySelector(".container");
const button = document.querySelector("#newgame");

button.addEventListener("click",NewGame);

function NewGame () {
    tilenumber = prompt ("How big do you want it? Maximum is 100 and default is 16.");
    container.innerHTML = "";
    CreateGrid(tilenumber);
}

function CreateGrid (tilenumber = 16) {
    if (tilenumber > 100) {
        window.alert ("This is too big! It will never fit!")
    }

    else {
        for (i=1;i<=tilenumber;i++) {
            let column = document.createElement("div");
            column.className = "column";
            column.id = i
            for (x=1;x<=tilenumber;x++) {
                let row = document.createElement("div");
                row.className = "row";
                row.style.width = "100%";
                let height = 500 / parseInt(tilenumber)
                row.style.height = `${height}px`;
                row.id = String(i-1000)+ String(x);
                row.addEventListener("mouseover",ChangeColor);
                column.appendChild(row);
            }
            
            container.appendChild(column);
        }
        
    }

}

function ChangeColor () {
    let tile = document.getElementById(this.id);
    if (tile) {
        tile.style.backgroundColor = "brown";
    }
    
}