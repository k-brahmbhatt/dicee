// Calculating first random numer

var randomnumber1 = Math.random();
randomnumber1 = randomnumber1 * 6 + 1;
randomnumber1 = Math.floor(randomnumber1);

switch (randomnumber1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;

  case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;

  case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;

  case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;

  case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;

  case 6:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;

}

// Calculating second random randomnumber

var randomnumber2 = Math.random();
randomnumber2 = randomnumber2 * 6 + 1;
randomnumber2 = Math.floor(randomnumber2);

switch (randomnumber2) {
  case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    break;

  case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    break;

  case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;

  case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;

  case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;

  case 6:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    break;

}

if (randomnumber1 > randomnumber2) {
  document.querySelector(".display").innerHTML = "🚩 Player 1 Wins!";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector(".display").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".display").innerHTML = "Draw !!!";
}
