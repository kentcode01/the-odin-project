var squareSet = document.createElement(`div`);
squareSet.setAttribute(`class`, `squareSet`)

for(var i = 1; i < 256; i++) {

    var div = document.createElement(`div`);
    squareSet.appendChild(div);
    div.setAttribute(`class`, `square`);
    div.setAttribute(`id`, `div` + i);
    div.style.border = `thin solid red`;
    
}


document.body.appendChild(squareSet);
