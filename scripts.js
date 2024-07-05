const img = document.getElementsByClassName("randomImg");
const randomImg = img[0];

let chosenImg = "cooltower.jpg";

const coolTower = "cooltower.jpg";
const coffee = "coffee.jpg";
const mountain = "mountain.jpg";
const someAmericanCity = "someamericancity.jpg";
const bigVape = "bigvape.jpg";

function getRandomNumberOneToVariable(range){
    let randomNumber = Math.floor(Math.random()*range) + 1;
    return randomNumber;
}

let randomNumber = getRandomNumberOneToVariable(5);

switch(randomNumber){
    case 1:
        chosenImg = coolTower;
        break;
    case 2:
        chosenImg = someAmericanCity;
        break;
    case 3:
        chosenImg = bigVape;
        break;
    case 4:
        chosenImg = coffee;
        break;
    case 5:
    default:
        chosenImg = mountain;
        break;
}

randomImg.style.backgroundImage = "url(./Resources/" + `${chosenImg}` + ")";