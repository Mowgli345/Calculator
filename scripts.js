let num1, num2, operator, tot;

function add (num1, num2) {
    console.log(`${num1} plus ${num2} = `)
    console.log(parseInt(num1) + parseInt(num2));

    return parseInt(num1) + parseInt(num2);
}

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

function operate (num1, num2, operator) {
    num1 = prompt("Enter first number");
    operator = prompt("Enter operation");
    num2 = prompt("Enter 2nd number");

    // switch(operator){
    //     case "+": add();
    //     case "-": subtract();
    //     case "/": divide();
    //     case "*": multiply();
    // }
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

operate();


//NEXT - Step 5. Event Listeners on numBtn