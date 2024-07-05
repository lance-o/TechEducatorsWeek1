//Get our attributes
const img = document.getElementsByClassName("randomImg");
const headerBar = document.querySelector("header");
const randomImg = img[0];

//Default image.
let chosenImg = "cooltower.jpg";

//Would have made this an array, but didn't feel like going too far ahead :)
const coolTower = "cooltower.jpg";
const coffee = "coffee.jpg";
const mountain = "mountain.jpg";
const someAmericanCity = "someamericancity.jpg";
const bigVape = "bigvape.jpg";

//Need this for darkening bar
window.requestAnimationFrame(darkenBar);

//Get scroll for bar darkening
function reportScrollY(){
    return window.scrollY;
}

//Do maths on scroll for better darkening
function reportScrollYUpdate(){
    return (reportScrollY() - 100) * (0.9 / 1270) * 2;
}

//If bar has scrolled, darken it - otherwise, it doesn't exist.
function darkenBar(){
    if(reportScrollY() >= 100){
        headerBar.style.background = "rgba(0, 0, 0, " + `${reportScrollYUpdate()}` + ")";
    }
    else{
        headerBar.style.background = "rgba(0, 0, 0, 0.0)";
    }
    window.requestAnimationFrame(darkenBar);
}

//Get a random number between 1 and (arg)
function getRandomNumberOneToVariable(range){
    let randomNumber = Math.floor(Math.random()*range) + 1;
    return randomNumber;
}

//Load image based on what this results in
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