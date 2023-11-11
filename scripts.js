let num1, num2, operator, tot, input, currentNum="";

let myDisplay = document.getElementById("display");
myDisplay.innerHTML="0";

function add (num1, num2) {
    console.log(`${num1} plus ${num2} = `)
    tot = parseInt(num1) + parseInt(num2);
    console.log(tot);
    myDisplay.innerHTML=tot;

    return parseInt(num1) + parseInt(num2);
}

//This works so far. Master copy
// function add (num1, num2) {
//     console.log(`${num1} plus ${num2} = `)
//     tot = parseInt(num1) + parseInt(num2);
//     console.log(tot);
//     myDisplay.innerHTML=tot;

//     return parseInt(num1) + parseInt(num2);
// }

function subtract (num1, num2) {
    console.log(`${num1} take ${num2} = `)
    console.log(parseInt(num1) - parseInt(num2));

    return parseInt(num1) - parseInt(num2);
}


function multiply (num1, num2) {
    console.log(`${num1} times ${num2} = `)
    console.log(parseInt(num1) * parseInt(num2));

    return parseInt(num1) * parseInt(num2);
}

function divide (num1, num2) {
    console.log(`${num1} divided by ${num2} = `)
    console.log(parseInt(num1) / parseInt(num2));

    return parseInt(num1) / parseInt(num2);
}

function operate (num1, num2) {
    num1 = prompt("Enter number 1");
    myDisplay.innerHTML=num1;
    operator = prompt("Enter operation");
    num2 = prompt("Enter number 2");
    myDisplay.innerHTML=num2;


    num1 = prompt("Enter first number");
    myDisplay.innerHTML=num1;
    operator = prompt("Enter operation");
    num2 = prompt("Enter 2nd number");
    myDisplay.innerHTML=num2;



    if (operator=="+"){
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

// operate();


//NEXT - Step 5. Event Listeners on numBtn

const numKeys = document.getElementsByClassName("numBtn");
Array.from(numKeys).forEach(button=> {
    button.addEventListener("click",(e)=>{
        input=button.innerHTML;
        currentNum=currentNum+input;
        myDisplay.innerHTML=currentNum;
   });
   console.log(`currentNum = ${currentNum}`);
});

const addKey = document.getElementById("btn-add");
console.log(addKey);

const clearKey = document.getElementById("clear");
clearKey.addEventListener("click",(e)=>
    myDisplay.innerHTML="0"
);