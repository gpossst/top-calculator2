const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const outputContainer = document.querySelector('.outputs')
let outputList = document.querySelector('#output-list')
let operator = [];
let outputs = [];
let inputs =[]

function selectAdd() {
    if(inputs.length>0 && operator[0]=='add' && operator[0] != operator[1]){
        selectReturn();
    }
    value();
    operator.unshift('add');
    console.log(inputs);
}

function selectSubtract() {
    if(inputs.length>0 && operator[0]=='subtract' && operator[0] != operator[1]){
        selectReturn();
    }
    value();
    operator.unshift('subtract');
    console.log(inputs);
}

function selectMultiply() {
    if(inputs.length>0 && operator[0]=='multiply' && operator[0] != operator[1]){
        selectReturn();
    }
    value();
    operator.unshift('multiply');
    console.log(inputs);
}

function selectDivide() {
    if(inputs.length>0 && operator[0]=='divide' && operator[0] != operator[1]){
        selectReturn();
    }
    value();
    operator.unshift('divide');
    console.log(inputs);
}

function selectReturn() {
    value();
    valueOne = inputs[1];
    valueTwo = inputs[0];
    console.log(operator)
    operate();
    popAnswer();
    inputs = [];
}

window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        selectReturn();
    }
})

function value(){
    let value = document.getElementById('box-one').value;
    inputs.unshift(value);
}

function popAnswer() {
    document.getElementById('box-one').value = outputs[0];
}

function operate() {
    if(operator[0] === 'add') {
        outputs.unshift(+valueOne + +valueTwo);
        console.log(outputs[0]);
    } else if (operator[0] === 'subtract') {
        outputs.unshift(+valueOne - +valueTwo);
        console.log(outputs[0]);
    } else if (operator[0] === 'multiply') {
        outputs.unshift(+valueOne * +valueTwo);
        console.log(outputs[0]);
    } else if (operator[0] === 'divide') {
        outputs.unshift(+valueOne / +valueTwo);
        console.log(outputs[0]);
    }
}

function clear() {
    outputs.splice(0,outputs.length);
    inputs.splice(0,inputs.length);
    operator.splice(0,operator.length);
}