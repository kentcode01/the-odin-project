var grid = document.createElement(`div`);
grid.setAttribute(`class`, `grid`);
var setNum = 1;

for(var i = 1; i <= 16; i++) {
    var squareSet = document.createElement(`div`);
    squareSet.setAttribute(`class`, `squareSet`);
    squareSet.setAttribute(`id`, `set` + (setNum++));
    for(var j = 1; j <= 16; j++) {
        var div = document.createElement(`div`);
        squareSet.appendChild(div);
        div.setAttribute(`class`, `square`);
        div.setAttribute(`id`, `square` + j);
        div.style.border = `thin solid red`;
    }
    grid.appendChild(squareSet)
}

document.body.appendChild(grid);
