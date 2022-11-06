const gameContainer = document.getElementById("game");
//need to compare 2 cards' classes (colors)
let cardA;
let cardB;
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
        alert("You must press GO!"); // is there another way to stop game from starting if player doesn't press go?
    }
    else if (!currentCard.classList.contains("flipped")) {
        currentCard.style.backgroundColor = currentCard.classList[0];
        currentCard.classList.add("flipped"); //when going line by line, this happens before checkMatch, but when run normally, check Match happens before color shows up
        cardArr.push(currentCard); 
}
if (cardArr.length == 2) {
    checkMatch(cardArr);
    }
    else if (cardArr.length < 2) {
        setTimeout(
            flipBack(cardArr), 2000); //it's entering flipBack function but not doing anything
        }
}
// when the DOM loads
createDivsForColors(shuffledColors);
//need to identify cardA and cardB class list from somewhere.. so maybe loop through all the divs on the page and if class of flipped then push to an array, and array.length should only equal 2. Then, you can check the classList of each index in that array and compare them. if arr.length != 2 then keep the loop going. If they match, then keep class as "flipped". If they don't match, then the setTimeout and returnToOriginal fxns occur
function checkMatch (arr) {
    if (arr.length > 2) {
        alert ("You can only select 2 cards!"); 
    }
    else if (arr.length == 2 && arr[0].classList[0] === arr[1].classList[0]) { 
            alert("it's a match!")
            arr.length = 0;
             } 
    else {
                setTimeout(
                 flipBack(arr), 1000);
                arr.length = 0;
                alert ("no match!");
                }
     //if all divs on page have class of "flipped" it means they're all matched and player won, can we check all divs? or check if divs with "flipped" == 10?
    //    let divs = document.querySelectorAll("div");
    //    if (divs.classList.contains("flipped")) {
    //     alert("You win!")
    //    }
            }

//entering this function but not reflecting the removal of "flipped" aka reverting back to the #game div setting
function flipBack(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("flipped"); //it's removing "flipped" but this doesn't revert them back to original state
    }
}
