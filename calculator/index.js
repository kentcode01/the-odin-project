
let a = ``, b = ``, operator = ``;
let operation = false;

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
    console.log(calc);
    return calc;
} 

function equals(a, b, operator) {
    return operate(a, b, operator);
}

let screen = document.getElementById(`screen`);

let digits = document.getElementsByTagName(`button`);
for(let i = 0; i < digits.length; i++) {
    digits[i].addEventListener(`click`, (e) => {
        
        if(e.target.parentElement.className === `digits`) {
        
            if(operation === false) {
                a += digits[i].textContent;
                console.log('a:' + a);
                screen.textContent = a;
            } else {
                b += digits[i].textContent;
                console.log('b:' + b);
                screen.textContent = b;
            }

        }
        else if(e.target.parentElement.className === `operators`) {
            
            console.log(digits[i].textContent);
            operator = digits[i].textContent;
            operation = true;

        }

        if(e.target.className === `equals`) {
            
            screen.textContent = operate(a, b, operator);
            a = screen.textContent;
            b = ``;
            operator = ``;
            operation = false;

        }

        if(e.target.className === `clear`) {
            
            screen.textContent = `0`;
            a = ``;
            b = ``;
            operator = ``;
            operation = false;
            
        }

    })
}