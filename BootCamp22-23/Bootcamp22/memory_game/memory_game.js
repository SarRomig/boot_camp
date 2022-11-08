const gameContainer = document.getElementById("game");
let matchCount = 0;
let cardArr = [];
let timer;
let timeLeft = 60;
let timeDisplay = document.querySelector("#timer");
function gameOver() {
    clearInterval(timer)
    alert("YOU RAN OUT OF TIME! GAME OVER")
}
function gameStart() {
    timer = setInterval(subtractTime, 1000);
    subtractTime();
}

function subtractTime () {
    timeLeft--;
    if (timeLeft >= 0){
        timeDisplay.innerHTML = timeLeft;
    }
    else {
        gameOver();
    }
}
const startBtn = document.querySelector("button");
startBtn.onclick = function (e) {
gameStart();
};
let clicked = false
document.querySelector('button').addEventListener("click", function() {
   clicked = true;
});
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
//set class of "flipped" to show color, set class of "original" to show blank card (maybe a more fun color than white) that way it can be toggled back and forth

function handleCardClick(event) {
  let currentCard = event.target;
  //this function will run with every click, so it needs to take into account that the card stays in "flipped" until handleCardClick runs again and checks both classes. it runs on the new Div(card) defined in previous function and is called on "click". 
    if (clicked != true) {
        alert("You must press GO!"); 
    }
    else if (!currentCard.classList.contains("flipped")) {
        currentCard.classList.add("flipped"); //when going line by line, this happens before checkMatch, but when run normally, check Match happens before color shows up
        cardArr.push(currentCard); 
}
checkArrayLength(cardArr);
}

function checkArrayLength (arr) {
  if (arr.length == 2) {
    checkMatch(arr);
    }
  }

// when the DOM loads
createDivsForColors(shuffledColors);

function checkMatch (arr) {
  if (arr.length == 2 && arr[0].classList[0] === arr[1].classList[0]) { 
           checkIfWon(arr);
           if (matchCount == 10){
            alert("YOU WIN!");
           }
            arr.length = 0;
             } 
    else { 
      alert("No match!");
                setTimeout(
                 flipBack(arr), 2000);
                 arr.length = 0;
                }
              }

 //if all divs on page have class of "flipped" it means they're all matched and player won, can we check all divs? or check if divs with "flipped" = 10?
function checkIfWon (arr) {
// let divs = document.querySelectorAll("flipped");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains("flipped")) {
                  matchCount++
                }
          }
        }
function flipBack(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("flipped"); //it's removing "flipped" but this doesn't revert them back to original state. Tried hard setting the background color to whitesmoke but no luck either
    }
}
