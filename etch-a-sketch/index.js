let board = document.getElementById(`board`);
let grid = document.getElementById(`grid`); 
let newGrid = document.getElementById(`alertButton`);
let maxWidth = document.getElementById(`grid`).offsetWidth;


function createGrid(x, y) {
    
    grid.setAttribute(`id`, `grid`);
    let width = (maxWidth * 1.0) / x;
    
    for(let i = 1; i <= x; i++) {

        let squareSet = document.createElement(`div`);
        squareSet.setAttribute(`class`, `squareSet`);
        squareSet.setAttribute(`id`, `set` + i);

        for(let j = 1; j <= y; j++) {

            let div = document.createElement(`div`);
            div.setAttribute(`class`, `square`);
            div.setAttribute(`id`, `square` + j);
            div.style.width = width + `px`;
            div.style.height = width + `px`;
            div.style.border = `thin solid black`;
            div.addEventListener(`mouseover`, (e) => {
                e.target.style.backgroundColor = `black`;
            });
            squareSet.appendChild(div);

        }

        grid.appendChild(squareSet)

    }

}

createGrid(16, 16);

newGrid.addEventListener(`click`, () => {  
    let sides = prompt(`Enter grid size. (e.g: 10 for 10x10 grid)`)
    if(sides === null) return;
    else if(isNaN(sides) == true) {
        alert(`Enter an number.`);
    } else {
        if(sides <= 0) {
            alert(`Enter valid number.`);
        } else if(sides > 100) {
            alert(`Max input is 100.`);
        } else {
            grid.innerHTML = "";
            createGrid(sides, sides);
        }
    }
})

