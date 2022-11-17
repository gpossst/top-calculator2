const screen = document.querySelector('.screen');
let operator;
let buttonInputs = [];
let operands = [];






function selectClear(){
    operands = [];
    buttonInputs =[];
    operator = '';
    populateScreen();
}
//clear all

function inputString(buttonInputs) {
    operands.unshift(buttonInputs.join(''));
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
}
//press number buttons

function selectAdd() {
    operator = 'add';
    inputString(buttonInputs);
}
function selectSubtract() {
    operator = 'subtract';
    inputString(buttonInputs);
}
function selectMultiply() {
    operator = 'multiply';
    inputString(buttonInputs);
}
function selectDivide() {
    operator = 'divide';
    inputString(buttonInputs);
}
//switch to operators
