//Variables
let  num1, num2, operator, tot, input, currentNum="";
let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";
const addKey = document.getElementById("btn-add");
const allButtons = document.getElementsByClassName("calcBtn");
const numKeys = document.getElementsByClassName("numBtn");
const opKey = document.getElementsByClassName("opBtn");
const equalsKey = document.getElementById("btn-equal");

//Event Listeners
//Get num1

// Array.from(numKeys).forEach(button =>
//     button.addEventListener("click",(e)=>{
//         input=button.innerHTML;
//         currentNum=currentNum+input;
//         myDisplay.innerHTML=currentNum;
//         num1 = currentNum;
//         console.log("getNum1 = "+num1);
//     }));
//Edot tis so that it doesn't just work for num1 but will instead be called by an N1 fucntion


Array.from(numKeys).forEach(button =>
        button.addEventListener("click",(e)=>{
            input=button.innerHTML;
            currentNum=currentNum+input;
            myDisplay.innerHTML=currentNum;
            console.log("currentNum = "+currentNum);
            return currentNum;

        }));


//Get Operator
Array.from(opKey).forEach(button=> {
    button.addEventListener("click",(e)=>{
        operator = button.innerHTML;
        currentNum="";
        console.log("Op = "+operator);
        return operator;
        });
    });


Array.from(opKey).forEach(button=> {
    button.addEventListener("click",(e)=>{
        operator = button.innerHTML;
        currentNum="";
        console.log("Op = "+operator);
        // return operator;
        getOperator(operator);
        });
    });

function getOperator (operator, currentNum) {    
    currentNum="";    
    // console.log("function getOperator. num1 = "+num1+". Operator = "+operator);
    console.log(`function getOperator. Operator = ${operator}. CurrentNum= ${currentNum}`);
    return operator;
}




//Run sum
equalsKey.addEventListener("click",(e)=>{
    console.log("Equals");
    debugger;
    calculate();
})


 //This should run when button is not a number
function getNum1 (currentNum) {
    num1 = currentNum;
    console.log("function getNum1. num1 = "+num1);
    return num1;
}

function getNum2 (currentNum) {
    num2 = currentNum;
    console.log("function getNum2. num1 = "+num1+". Operator = "+operator+"num2 = "+num2);
    return num2;
}

// function getOperator (operator) {    
//     currentNum="";    
//     console.log("function getOperator. num1 = "+num1+". Operator = "+operator);
// }

function calculate (num1, num2, operator) {
    if (operator=="+"){
        console.log("Total = "+num1+num2);
        add(num1,num2);
    }
    else if (operator=="-"){
        subtract(num1,num2);
    }
    else if (operator=="*"){
        multiply(num1,num2);
    }
    else if (operator=="/"){
        divide(num1,num2);
    }
    else {
        return -1;
    }
}









const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>{
    myDisplay.innerHTML="0";
    currentNum="";
});