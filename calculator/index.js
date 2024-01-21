let screen = document.getElementById(`screen`);
let digits = document.getElementsByTagName(`button`);

let a = ``, b = ``, operator = ``;
let operation = false;
let focusA = true;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    
    return a / b;
    
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    let calc = 0;
    if(operator === `+`) {
        calc = add(a, b);
    } else if(operator === `-`) {
        calc = subtract(a, b);
    } else if(operator === `*`) {
        calc = multiply(a, b);
    } else if(operator === `/`) {
        calc = divide(a, b);
    }
    return calc;
} 

function keypress(e, i) {
    if(e.target.parentElement.className === `digits`) {
        if(focusA === true) {
            a += digits[i].textContent;
            screen.textContent = a;
        } else {
            b += digits[i].textContent;
            screen.textContent = b;
        }
    }
    else if (e.target.parentElement.className === `operators`) { 
        
        if(b !== `` && operator !== ``) {
            a = operate(a, b, operator);
            operator = digits[i].textContent;
            b = ``;
        } else {
            focusA = false;
            operator = digits[i].textContent;
            
        }
        operation = true;
        
            
    } else if (e.target.className === `equals`) {      
        screen.textContent = operate(a, b, operator);
        a = screen.textContent;
        b = ``;
        operator = ``;
        focusA = true;   
    } else if (e.target.className === `clear`) {      
        clear();
    }

    console.log(`a: ${a}, b: ${b}, operator: ${operator}, focusA: ${focusA}, operation: ${operation}`)

}

function clear() {
    screen.textContent = `0`;
    a = ``;
    b = ``;
    operator = ``;
    focusA = true; 
    operation = false;
}

for(let i = 0; i < digits.length; i++) {
    digits[i].addEventListener(`click`, (e) => {
        keypress(e, i);
    });
}


