//11/12 Issues
//12 + 7 - 5 * 3 = 42 is fine, but messed up when hitting equals sign. - F
//11/18 - Now reverse issue. 

//No decimals
//Backspace?
// Hit operator after = runs operation with n1
// // Clear : then & + -> O displayed


//Variables
let  num1, num2, operator, op2, tot, input, tempNum="", displayNum="";
let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";
const addKey = document.getElementById("btn-add");
const allButtons = document.getElementsByClassName("calcBtn");
const numKeys = document.getElementsByClassName("numBtn");
const opKey = document.getElementsByClassName("opBtn");
const equalsKey = document.getElementById("btn-equal");





Array.from(numKeys).forEach(button =>
        button.addEventListener("click",(e)=>{
            input=button.innerHTML;
            tempNum=tempNum+input;
            displayNum=tempNum.substring(0,4);
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
    //debugger;
        calculate();
        num2="";

} )

function getOperator () {   
    tempNum="";
    debugger;
    if (num1 === undefined) {  //This runs on the firsdt equation: 12+7=
        console.log("getOperator 1");
        num1 =parseFloat(displayNum);
        displayNum = "";
        op2 = operator;
        return;
    }
    else if (num2 === undefined) {    //This runs on the second equation: 12+7-
        console.log("getOperator 2");
        num2 = displayNum;
        displayNum = "";
    }
    else {
        console.log("getOperator 3"); //This runs on equals??
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

        console.log("getOperator End Section");
    displayNum ="";
    op2 = operator;
    return num1;
}

function calculate () {
    console.log(`num2 = ${num2}`);
    if (num2 === undefined) {  //This runs on the firsdt equation: 12+7=
        console.log("Calculate 1");
    num2=parseFloat(displayNum);
    displayNum = "";  
    }

    else if (num2 !== undefined){    //Runs for second equ. 12+7-...
        console.log("Calculate 2");
        // num1 = tot; - Messes up for the last calc
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
    //num1 = tot;
    return num1;
 
}

function add () {
    debugger;
    tot = parseFloat(num1) + parseFloat(num2);
    myDisplay.innerHTML=tot;
    displayNum = tot;
    num1=tot;
}

function subtract () {
    tot = parseFloat(num1) - parseFloat(num2);
    myDisplay.innerHTML=tot;
    displayNum = tot;
    num1=tot;
}
function multiply () {
    tot = parseFloat(num1) * parseFloat(num2);
    myDisplay.innerHTML=tot;
    displayNum = tot;
    num1=tot;
}
function divide () {
    tot = parseFloat(num1) / parseFloat(num2);
    myDisplay.innerHTML=tot;
    displayNum = tot;
    num1=tot;
}

const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>{
    debugger;
    myDisplay.innerHTML="0";
    displayNum="";
    num1=num2=tot = 0;
    tempNum = op2 = operator = "";
});