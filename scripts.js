const testElementP = document.getElementById("TestID");
const elementChooser = document.getElementById("Chooser");
const elementAdder = document.getElementById("Adder");
const elementD6 = document.getElementById("D6");
let count = 0;

elementAdder.addEventListener("click", adderAddD6);



function getRandomNumberOneToVariable(range){
    let randomNumber = Math.floor(Math.random()*range) + 1;
    return randomNumber;
}

function getRandomNumberCoinFlip(){
    return getRandomNumberOneToVariable(2);
}

function getRandomNumberOneToTen(){
    return getRandomNumberOneToVariable(10);
}

function getRandomNumber6SideDice(){
    return getRandomNumberOneToVariable(6);
}

function getRandomNumber4SideDice(){
    return getRandomNumberOneToVariable(4);
}

function getRandomNumber20SideDice(){
    return getRandomNumberOneToVariable(20);
}

function getRandomNumberCoinFlip(){
    return getRandomNumberOneToVariable(2);
}