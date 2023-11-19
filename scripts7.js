//Will allow sums with equals: 1+2=3+4=7+5=12...

//Variables
let  num1, num2, operator, op2, tot, input, tempNum="", displayNum="";
let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";
const addKey = document.getElementById("btn-add");
const allButtons = document.getElementsByClassName("calcBtn");
const numKeys = document.getElementsByClassName("numBtn");
const opKey = document.getElementsByClassName("opBtn");
const equalsKey = document.getElementById("btn-equal");
const posneg = document.getElementById("btn-neg");

const myDelete = document.getElementById("btn-del");
myDelete.addEventListener("click",(e)=>{
    //debugger;
    input="";
    let x = displayNum.length-1;
    displayNum= displayNum.slice(0,x);
    myDisplay.innerHTML=displayNum;
});

console.log(posneg);

posneg.addEventListener("click",(e)=>{
    debugger;
    displayNum*=-1;
    myDisplay.innerHTML=displayNum;

});

Array.from(numKeys).forEach(button =>
        button.addEventListener("click",(e)=>{
            input=button.innerHTML;
            tempNum=tempNum+input;
            displayNum=tempNum.substring(0,8);
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
        num2=0;

} )

function getOperator () {   
    debugger;
    tempNum="";
    if (num1 === undefined) {  //First equation: 2+
        console.log("getOperator 1");
        num1 =parseFloat(displayNum);
        displayNum = "";
        op2 = operator;
        return;
    }

    else if (num2==0) {
        console.log("getOperator 2 - just exits"); 
        num2=100;
        op2=operator;
        return;
    }

    else if (num2 === undefined) {       //Second equation: 2+3+ . Runs add and End
        console.log("getOperator 3");
        if (displayNum==="") {
            myDisplay.innerHTML="Error";
            return;
        }
        num2 = displayNum;
        displayNum = "";
    }

    else { //n2 != undefined
        console.log("getOperator 4");    //Third equation: 2+3+4+  ALSO on after equals: 2+3+4=(5) +  - this runs SUM which we don't want. 
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
    debugger;
    console.log(`num2 = ${num2}`);
    if (num2 === undefined) {  
        console.log("Calculate 1");
    num2=parseFloat(displayNum);
    displayNum = "";  
    }

    else if (num2 !== undefined){    //Runs on multiples: 2+3+4+5=  ... includes end = num2=0
        console.log("Calculate 2");
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
    if (num2 == 0) {
        myDisplay.innerHTML="Zero Error";
        return;
    }
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
    input = tempNum = op2 = operator = "";
});