let screen = document.getElementById(`screen`);
let digits = document.getElementsByTagName(`button`);
let a = ``, b = ``, operator = ``;
let operation = false;
let focusA = true;
let decimalUse = false;

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
    let ans = a / b;
    if(isDecimal(ans)) {
        decimalUse = true;
    }
    return ans;
}

function isDecimal(n) {
    return n - Math.floor(n) !== 0;
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
            if(a.length < 9) {
                a += digits[i].textContent;
            }
            screen.textContent = a;
        } else {
            if(b.length < 9) {
                b += digits[i].textContent;
            }
            
            screen.textContent = b;
        }
    }
    else if (e.target.parentElement.className === `operators`) { 
        if(digits[i].textContent === `+/-`) {
            if(focusA === true && a === ``) {
                a += `-`;
                screen.textContent = `-`;
            } else if(focusA === false && b === ``) {
                b += `-`;
                screen.textContent = `-`;
            }      
        } else if(digits[i].textContent === `.`) {
            if(decimalUse === false) {
                if(focusA === true && a !== `` && a !== `-`) {
                    a += `.`;
                    screen.textContent = a;
                    decimalUse = true;
                } else if(focusA === false && b !== `` && b !== `-`) {
                    b += `.`;
                    screen.textContent = b;
                    decimalUse = true;
                } 
                
            }
        } else {
            if(b !== `` && operator !== ``) {
                a = operate(a, b, operator);              
                operator = digits[i].textContent;
                b = ``;
            } else {
                focusA = false;
                operator = digits[i].textContent;
            }
            operation = true;
            decimalUse = false;
        }
            
        
            
    } else if (e.target.className === `equals`) {  
        let temp =  operate(a, b, operator);
        if(String(temp).length > 9) {
            if(isDecimal(temp)) {
                temp = String(temp).substring(0, 8);
            } else {
                temp = String(temp).substring(0, 8).split(``).splice(1, 1, `.`).join(``);
            }
        }   
        screen.textContent = temp;
        a = screen.textContent;
        b = ``;
        operator = ``;
        focusA = true;   
    } else if (e.target.className === `clear`) {      
        clear();
    }
   

    // console.log(`a: ${a}, b: ${b}, operator: ${operator}, focusA: ${focusA}, operation: ${operation}`)

}

function clear() {
    screen.textContent = `0`;
    a = ``;
    b = ``;
    operator = ``;
    focusA = true; 
    operation = false;
    decimalUse = false;
}

for(let i = 0; i < digits.length; i++) {
    digits[i].addEventListener(`click`, (e) => {
        keypress(e, i);

        if(a === `Infinity`) {
            a = `ERROR`;
            screen.textContent = a;
        }
    });
}


