//Variables
let  num1, num2, operator, tot, input, currentNum="";
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
            currentNum=currentNum+input;
            myDisplay.innerHTML=currentNum;
        }));

Array.from(opKey).forEach(button=> {
    button.addEventListener("click",(e)=>{
        operator = button.innerHTML;
        getOperator(operator,currentNum);
        });
    });

function getOperator (operator) {    
    num1 = currentNum;
    currentNum = "";
}

//Run sum
equalsKey.addEventListener("click",(e)=>{
        // calculate(num1, operator);
        calculate(num1,operator);
})

function calculate (num1, operator) {
    num2=parseFloat(currentNum);
    currentNum = "";
    if (operator=="+"){
        add(num1,num2);
    }
    else if (operator=="-"){
        subtract(num1,num2);
    }
    else if (operator=="x"){
        multiply(num1,num2);
    }
    else {
        divide(num1,num2);
    }
}

function add (num1, num2) {
    tot = parseInt(num1) + parseInt(num2);
    myDisplay.innerHTML=tot;
    currentNum = tot;
      console.log(`Num1 = ${num1}. Num2 = ${num2}. Cuurent = ${currentNum}. Tot=${tot}`);

}
function subtract (num1, num2) {
    tot = parseInt(num1) - parseInt(num2);
    myDisplay.innerHTML=tot;
    currentNum = tot;
}
function multiply (num1, num2) {
    tot = parseInt(num1) * parseInt(num2);
    myDisplay.innerHTML=tot;
    currentNum = tot;
}
function divide (num1, num2) {
    tot = parseInt(num1) / parseInt(num2);
    myDisplay.innerHTML=tot;
    currentNum = tot;
}



const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>{
    myDisplay.innerHTML="0";
    currentNum="";
});