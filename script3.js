let  num1, num2, operator, tot, input, currentNum="";
let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";

const addKey = document.getElementById("btn-add");

const allButtons = document.getElementsByClassName("calcBtn");

const numKeys = document.getElementsByClassName("numBtn");

const opKey = document.getElementsByClassName("opBtn");

getNum1();

//GETS FIRST NUMBER
function getNum1 () {
Array.from(allButtons).forEach(button=> {
    button.addEventListener("click",(e)=>{
        if (button.classList.contains("opBtn")) {
            
            Array.from(opKey).forEach(button=> {
                console.log("First Here!");
                //Cycles through all 4 here

                //THIS WAS NOT BEING RUN!!
                // button.addEventListener("click",(e)=>{
                //   console.log(`num1 = ${num1}`);
                // currentNum="";
                // console.log(`operator = ${operator}`);    
                //     });

                });
                debugger;
                console.log("Here!");
            operator = button.innerHTML;
            currentNum="";
            getNum2();
  
        }
        else {  //this runs for first number after operator added. Should go staright to num2. 
            input=button.innerHTML;
            currentNum=currentNum+input;
            myDisplay.innerHTML=currentNum;
            num1 = currentNum;
            console.log("getNum1 = "+num1);
            debugger;
        }                  
    //after adding operator event listener comes here
   });     
});         
};          


//GETS OPERATOR
function getOperator() {

Array.from(opKey).forEach(button=> {
    button.addEventListener("click",(e)=>{
    console.log(`num1 = ${num1}`);
    currentNum="";
    console.log(`operator = ${operator}`);    
        });
    });
}

function getNum2 () {
    Array.from(numKeys).forEach(button=> {
        button.addEventListener("click",(e)=>{
            // debugger;
            //At this point, number 2 has been entered as part of n1. So currentNum and n1 = 12
                
                input=button.innerHTML;
                currentNum=currentNum+input;      
                myDisplay.innerHTML=currentNum;   //At this stage currentNum changes to 122
                num2 = currentNum;
                console.log(`num2= ${num2}`);     
                return num2;    
        })
    })};

// function getNum2 () {
//     Array.from(numKeys).forEach(button=> {
//         button.addEventListener("click",(e)=>{
  
//                 input=button.innerHTML;
//                 currentNum=currentNum+input;
//                 myDisplay.innerHTML=currentNum;
//                 num2 = currentNum;
//                 console.log(`num2= ${num2}`);     
//                 return num2;    
//         })
//     })};

function operate (num1, num2) {
    if (operator=="+"){
        add(num1,num2);
        }
    else {
        return -1;
        }
    };

function add (num1, num2) {
    console.log(`${num1} plus ${num2} = `)
    tot = parseInt(num1) + parseInt(num2);
    console.log(tot);
    myDisplay.innerHTML=tot;
}










const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>{
    myDisplay.innerHTML="0";
    currentNum="";
});