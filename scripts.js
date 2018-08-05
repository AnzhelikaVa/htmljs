let firstValue = '';
let operandValue = '';
let secondValue = '';

function digit(n) {
    console.log("Works! " + n);
    if(operandValue){
     secondValue += n;
     write(secondValue);
    }else{
        firstValue += n;
        write(firstValue);
    }
}
 function write(n){
    document.getElementById('display').value = n;
}
function operand(operand){
    console.log(`operand ${operand}`);
    write('');
    operandValue = operand;
}
function getResult() {
    let result = 0;

    if (operandValue === '+') {
        result = +firstValue + +secondValue;
    }
    if (operandValue === '-') {
        result = +firstValue - +secondValue;
    }
    if (operandValue === '*') {
        result = +firstValue * +secondValue;
    }
    if (operandValue === '/') {
        result = +firstValue / +secondValue;
        result = result.toFixed(4);
    }
    if (operandValue ==='.') {
        result = +firstValue +('.') +secondValue;
    }
    if (operandValue ==='%') {
        result = +firstValue / 100;
    }
    write(result);
    setInitialValue(result);

}
function setInitialValue(firstValueByDefault){
    firstValue = firstValueByDefault;
    operandValue = '';
    secondValue = '';
}
displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
calculationFinished = false;

function clearAmount() {
    let display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    display.value = displayNum;

}








