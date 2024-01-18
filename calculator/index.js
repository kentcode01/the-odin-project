
let a = ``, b = ``, operator = ``;

let calculator = {
    total: 0,
    store: [],
    index: 0,
    currentDigit: ``,
    operation: false,
}

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
    if(operator === `+`) {
        add(a, b);
    } else if(operator === `-`) {
        subtract(a, b);
    } else if(operator === `*`) {
        multiply(a, b);
    } else if(operator === `/`) {
        divide(a, b);
    }
} 

function equals(a, b, operator) {
    operate(a, b, operator);
}

// function checkValid() {
// }

let screen = document.getElementById(`screen`);

let digits = document.getElementsByTagName(`button`);
for(let i = 0; i < digits.length; i++) {
    digits[i].addEventListener(`click`, (e) => {
        
        if(e.target.parentElement.className == `digits`) {
            // add to the curent value (calculator.currentValue)
            
            // if operations is false, then store into 'a'
            // else if the operation is true, store into 'b'
            if(calculator.operation === false) {
                a += digits[i].textContent;
                console.log('a:' + a);
            } else {
                b += digits[i].textContent;
                console.log('b:' + b);
            }

        }
        else if(e.target.parentElement.className == `operators`) {
            // store calculator.currentValue to var a
            // and change 'operations' to true
        }
        
        // console.log(e.target.parentElement.className)

        if(e.target.parentElement.className == `equals`) {
            // if a and b has a value, and 'operations' is true,
            // then calculate. 
            // After calculation, store the solution to 'a'
            // change 'operation' back to false
        }

        if(e.target.parentElement.className == `clear`) {
            // reset all of the objects and variables to default
        }
    })
}