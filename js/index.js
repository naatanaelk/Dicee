//image 1 random change code
var randomNumber1 = Math.floor(Math.random()*6+1);

var diceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImage1);

//image 2 random change code
var randomNumber2 = Math.floor(Math.random()*6+1);

var diceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImage2);

//determine winner
if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
    document.getElementsByClassName("player1")[0].innerHTML = "👑<br>Player 1";
}else if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
    document.getElementsByClassName("player2")[0].innerHTML = "👑<br>Player 2";
}else if(randomNumber1===randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "It's a Draw...";
}