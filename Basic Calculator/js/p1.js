var screen = document.getElementById('screen');

var op1 = null, op2 = null, operator = null;


function clkNum() {
    var e = event.target;
    if(op1 == null && op2 == null && operator == null) {
        op1 = parseInt(event.target.textContent);
        screen.textContent = op1;
        console.log(op1);
    }
    else if( op1 != null && operator != null && op2 == null ) {
    op2 = parseInt(event.target.textContent);
    console.log(op2);
    }
}

function clkOperator() {
    var e = event.target;
    if( op1 != null && operator == null) {
        operator = event.target.textContent;
        console.log(operator);
    }
    if( op1 != null && op2 != null && e.textContent == '=') {
        calculate();
    }
}

function calculate() {
    if( operator == '+') {
        op1 = op1 + op2;
    }
    else if( operator == '-') {
        op1 = op1 - op2;
    }
    else if( operator == '*') {
        op1 = op1 * op2;
    }
    else if( operator == '/') {
        op1 = op1 / op2;
    }
    screen.textContent = op1;
    console.log("Answer = " + op1);
    operator = null;
    op2 = null;

}

function clkReset() {
   op1 = null;
   op2 = null;
   operator = null;
   screen.textContent = 0;
}

document.getElementById('zero').addEventListener('click', clkNum);
document.getElementById('one').addEventListener('click', clkNum);
document.getElementById('two').addEventListener('click', clkNum);
document.getElementById('three').addEventListener('click', clkNum);
document.getElementById('four').addEventListener('click', clkNum);
document.getElementById('five').addEventListener('click', clkNum);
document.getElementById('six').addEventListener('click', clkNum);
document.getElementById('seven').addEventListener('click', clkNum);
document.getElementById('eight').addEventListener('click', clkNum);
document.getElementById('nine').addEventListener('click', clkNum);

document.getElementById('add').addEventListener('click', clkOperator);
document.getElementById('subtract').addEventListener('click', clkOperator);
document.getElementById('multiply').addEventListener('click', clkOperator);
document.getElementById('divide').addEventListener('click', clkOperator);
document.getElementById('equal').addEventListener('click', calculate);
document.getElementById('reset').addEventListener('click', clkReset);



screen.addEventListener('click', clkReset);
