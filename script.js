const container = document.querySelector(".container");

for (i=0;i<272;i++) {
    let column = document.createElement("div");
    column.className = "column";
    column.id = i;
    column.addEventListener("mouseover",changecolor,false);
    container.appendChild(column);
    
}
    
function changecolor () {
    let tile = document.getElementById(this.id);
    if (tile) {
        tile.style.backgroundColor = "green";
    }
    
}