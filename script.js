const screen = document.querySelector('.screen');
let operator = [];
let buttonInputs = [];
let operands = [];
let output;
let pressed = 0;
let dot = 0;



function operate(operands, operator) {

    if(operator[0] == 'add'){
        output = +operands[1] + +operands[0];
        console.log(output);
        operands.unshift(output);
    } else if (operator[0] == 'subtract'){
        output = +operands[1] - +operands[0];
        console.log(output);
        operands.unshift(output);
    } else if (operator[0] == 'multiply'){
        output = +operands[1] * +operands[0];
        console.log(output);
        operands.unshift(output);
    } else if (operator[0] == 'divide'){
        output = +operands[1] / +operands[0];
        console.log(output);
        operands.unshift(output);
    }

    buttonInputs = [];
    operator = [];
    screen.innerText = output
}

function selectClear() {
    operands = [];
    buttonInputs =[];
    operator = [];
    populateScreen();
}
//clear all

function inputString(buttonInputs) {
    if (buttonInputs != ''){
        operands.unshift(buttonInputs.join(''));
    }
}
//turns inputs array into a string to be shown on screen and used in operation

function populateScreen() {
    let text = buttonInputs.join('');
    screen.innerText = text;
}
//puts selected number on screen

function numberPress(num) {
    buttonInputs.push(num);
    populateScreen();
    pressed++;
}
//press number buttons

function dotPress(num) {
    if (dot < 1){
        buttonInputs.push(num);
        populateScreen();
        dot++;
    }
}

function selectAdd() {
    if (buttonInputs != ''|| operator.length > 0 && pressed > 0) {
    operator.unshift('add');
    }
    inputString(buttonInputs);
    buttonInputs = [];
    if (operator.length > 1 && operator[0] == operator[1]) {
        inputString(buttonInputs);
        operate(operands, operator);
    } else if (operator.length > 1 && operator[0] != operator[1]) {
        inputString(buttonInputs);
        operateBefore(operands, operator);
    }
}
function selectSubtract() {
    if (buttonInputs != '' || operator.length > 0 && pressed > 0) {
        operator.unshift('subtract');
        }
    inputString(buttonInputs);
    buttonInputs = [];
    if (operator.length > 1 && operator[0] == operator[1]) {
        inputString(buttonInputs);
        operate(operands, operator);
    } else if (operator.length > 1 && operator[0] != operator[1]) {
        inputString(buttonInputs);
        operateBefore(operands, operator);
    }
}
function selectMultiply() {
    if (buttonInputs != '' || operator.length > 0 && pressed > 0) {
        operator.unshift('multiply');
        }
    inputString(buttonInputs);
    buttonInputs = [];
    if (operator.length > 1 && operator[0] == operator[1]) {
        inputString(buttonInputs);
        operate(operands, operator);
    } else if (operator.length > 1 && operator[0] != operator[1]) {
        inputString(buttonInputs);
        operateBefore(operands, operator);
    }
}
function selectDivide() {
    if (buttonInputs != '' || operator.length > 0 && pressed > 0) {
        operator.unshift('divide');
        }
    inputString(buttonInputs);
    buttonInputs = [];

    if (operator.length > 1 && operator[0] == operator[1]) {
        inputString(buttonInputs);
        operate(operands, operator);
    } else if (operator.length > 1 && operator[0] != operator[1]) {
        inputString(buttonInputs);
        operateBefore(operands, operator);
    }
}
//switch to operators


function selectReturn() {
    inputString(buttonInputs);
    operate(operands, operator);
}

function operateBefore(operands, operator) {
    if(operator[1] == 'add'){
        output = +operands[1] + +operands[0];
        console.log(output);
        operands.unshift(output);
    } else if (operator[1] == 'subtract'){
        output = +operands[1] - +operands[0];
        console.log(output);
        operands.unshift(output);
    } else if (operator[1] == 'multiply'){
        output = +operands[1] * +operands[0];
        console.log(output);
        operands.unshift(output);
    } else if (operator[1] == 'divide'){
        output = +operands[1] / +operands[0];
        console.log(output);
        operands.unshift(output);
    }

    buttonInputs = [];
    operator = [];
    screen.innerText = output
}
