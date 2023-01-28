var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomnImage1 = "images/dice" + randomNumber1 + ".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomnImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomnImage2 = "images/dice" + randomNumber2 + ".png";
var image1=document.querySelectorAll("img")[1].setAttribute("src",randomnImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🏴";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins 🏴";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}