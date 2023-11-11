let num1, num2, operator, tot, input, currentNum="";

let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";

const addKey = document.getElementById("btn-add");

const allButtons = document.getElementsByClassName("calcBtn");

const numKeys = document.getElementsByClassName("numBtn");
const opKey = document.getElementsByClassName("opBtn");

const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>{
    myDisplay.innerHTML="0";
    currentNum="";
});


//Get Numbers
Array.from(allButtons).forEach(button=> {
    button.addEventListener("click",(e)=>{
        if (button.classList.contains("opBtn")) {
            return num1;
 
        }
        else {
            input=button.innerHTML;
            currentNum=currentNum+input;
            myDisplay.innerHTML=currentNum;
            num1 = currentNum;
            console.log(num1);
        }  
    })
})

let myNumber = getMyNumber() 


function selectOperator() {
    Array.from(opKey).forEach(button => {
        button.addEventListener("click",(e) => {
            if (button.id="btn-add") {
                operator = "+";
            }
            else if (button.id="btn-subtract") {
                operator = "-";
            }
            else if (button.id="btn-multiply") {
                operator = "*";
            }
            else if (button.id="btn-divide") {
                operator = "/";
            }
            console.log(e.target.innerHTML);
    })
})
};

selectOperator();