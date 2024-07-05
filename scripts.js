const img = document.getElementsByClassName("randomImg");
const headerBar = document.querySelector("header");
const randomImg = img[0];

let chosenImg = "cooltower.jpg";

const coolTower = "cooltower.jpg";
const coffee = "coffee.jpg";
const mountain = "mountain.jpg";
const someAmericanCity = "someamericancity.jpg";
const bigVape = "bigvape.jpg";

window.requestAnimationFrame(darkenBar);

function getRandomNumberOneToVariable(range){
    let randomNumber = Math.floor(Math.random()*range) + 1;
    return randomNumber;
}

function reportScrollY(){
    return window.scrollY;
}

function reportScrollYUpdate(){
    return reportScrollY() / 1200 + 0.3;
}

function darkenBar(){
    if(reportScrollY() >= 300){
        headerBar.style.background = "rgba(0, 0, 0, " + `${reportScrollYUpdate()}` + ")";
    }
    else{
        headerBar.style.background = "rgba(0, 0, 0, 0.1)";
    }
    window.requestAnimationFrame(darkenBar);
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