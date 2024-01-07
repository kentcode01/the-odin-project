let board = document.getElementById(`board`);
let grid = document.getElementById(`grid`); 
let newGrid = document.getElementById(`alertButton`);
let maxWidth = document.getElementById(`grid`).offsetWidth;
let randomize = false;

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
            div.style.border = `thin solid orange`;
            div.addEventListener(`mouseover`, (e) => {
                if(randomize === false) {
                    e.target.style.backgroundColor = `black`;
                } else {
                    let a = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    let c = Math.floor(Math.random() * 256);

                    let color = `rgb(${a},${b},${c})`;
                    e.target.style.backgroundColor = color;
                }
            });
            squareSet.appendChild(div);
        }
        grid.appendChild(squareSet);
    }
}

function getUserInput(sides) {
    
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
    input.value = ``;
}

createGrid(16, 16);

let input = document.getElementById(`gridInput`);
let button = document.getElementById(`alertButton`);
let reset = document.getElementById(`reset`);
let squares = document.getElementsByClassName(`square`);
let random = document.getElementById(`random`);

button.addEventListener(`click`, (e) => {
    let sides = input.value;
    getUserInput(sides);
})

input.addEventListener(`keydown`, (e) => {
    if(e.key === `Enter`) {
        let sides = input.value;
        getUserInput(sides);
    }
})

reset.addEventListener(`click`, () => {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.removeProperty(`background-color`);
    }
})

random.addEventListener(`click`, () => {
    randomize = !randomize;
})



