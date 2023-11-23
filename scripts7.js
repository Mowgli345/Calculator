
// Crate variable for myDisplay.innerHTML

//Limit 1 x decimal Eg. 1.23.45


//Dispaly higher numbers

//Variables
let  num1, num2, operator, op2, tot, input, tempNum="", displayNum="", dispTotal="";

let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";

let dispDigits = 8;

const addKey = document.getElementById("btn-add");
const allButtons = document.getElementsByClassName("calcBtn");
const numKeys = document.getElementsByClassName("numBtn");
const opKey = document.getElementsByClassName("opBtn");
const equalsKey = document.getElementById("btn-equal");
const posneg = document.getElementById("btn-neg");

Array.from(numKeys).forEach(button =>
    button.addEventListener("click",(e)=>{
        input=button.innerHTML;
//Prevent multiple decimals
        if (input == "." && tempNum%1!=0) {
            input="";
        }
        tempNum=tempNum+input;
        displayNum=tempNum.substring(0,dispDigits);
        myDisplay.innerHTML=displayNum;
    }));


Array.from(opKey).forEach(button=> {
    button.addEventListener("click",(e)=>{
        operator = button.innerHTML;
        getOperator(operator,displayNum);
        });
    });

//Run sum
equalsKey.addEventListener("click",(e)=>{
    calculate();
    num2=0;
} )

function getOperator () {   
    tempNum="";
    if (num1 === undefined) {  
        num1 =parseFloat(displayNum);
        displayNum = "";
        op2 = operator;
        return;
    }
    else if (num2==0) {
        num2=100;
        op2=operator;
        return;
    }
    else if (num2 === undefined) {       
        if (displayNum==="") {
            myDisplay.innerHTML="Error";
            return;
        }
        num2 = displayNum;
        displayNum = "";
    }
    else { 
        num2 = displayNum;  
      }
        if (op2=="+"){
            add(num1,num2);
        }
        else if (op2=="-"){
            subtract(num1,num2);
        }
        else if (op2=="x"){
            multiply(num1,num2);
        }
        else {
            divide(num1,num2);
        }
    displayNum ="";
    op2 = operator;
    return num1;
}

function calculate () {
    if (num2 === undefined) {  
        num2=parseFloat(displayNum);
        displayNum = "";  
        }
    else if (num2 !== undefined){   
        num2 = tempNum;
    }

    if (operator=="+"){
        add();
    }
    else if (operator=="-"){
        subtract();
    }
    else if (operator=="x"){
        multiply();
    }
    else {
        divide();
    }

    if (tot % 1 != 0) {
        let decIndex = tot.toString().indexOf(".");
        let myDecimal = dispDigits-decIndex-1;
        if (myDecimal>0) {
            dispTotal=tot.toFixed(myDecimal);
        }
        else {
            dispTotal = Math.round(tot);
        }
    }
     else if(tot>99999) {
        dispTotal= tot.toExponential(3);
     }

    myDisplay.innerHTML=dispTotal;
    displayNum = dispTotal;
    num1=tot;
    return num1; 
}

function add () {
    tot = parseFloat(num1) + parseFloat(num2);
}
function subtract () {
    tot = parseFloat(num1) - parseFloat(num2);
}
function multiply () {
    tot = parseFloat(num1) * parseFloat(num2);
}
function divide () {
    if (num2 == 0) {
        myDisplay.innerHTML="Zero Error";
        return;
    }
    tot = parseFloat(num1) / parseFloat(num2);
}

// Clear key
const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>{
    myDisplay.innerHTML="0";
    displayNum="";
    num1=num2=tot = 0;
    input = tempNum = op2 = operator = "";
});

//Keystrokes
document.addEventListener('keydown', (e) => {
    let key = e.key;
    let regeX = /[0-9.]/;
    if (key.match(regeX)) {
        input = key;
        tempNum=tempNum+input;
        displayNum=tempNum.substring(0,8);
        myDisplay.innerHTML=displayNum;
        }
    else if (e.shiftKey && (key=="+" || key=="*")) {
        operator = key;
        getOperator(operator,displayNum);
      }
    else if (key == "-" || key == "/") {
        operator = key;
        getOperator(operator,displayNum);
    }
    else if (e.shiftKey && key=="=") {
        calculate();
        num2=0;
      }    
});

// +/- key 
posneg.addEventListener("click",(e)=>{
    displayNum*=-1;
    myDisplay.innerHTML=displayNum;
});
    
// Delete button
const myDelete = document.getElementById("btn-del");
myDelete.addEventListener("click",(e)=>{
    input="";
    let x = displayNum.length-1;
    displayNum= displayNum.slice(0,x);
    myDisplay.innerHTML=displayNum;
});