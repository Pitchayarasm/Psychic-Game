// Setting Variable.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var winPoints = 0;
var losePoints = 0;
var chances = 9;
var userGuessSoFar = [];
var winSound = document.createElement('audio');
document.body.appendChild(winSound);
winSound.src = 'assets/sounds/win.wav'
var loseSound = document.createElement('audio');
document.body.appendChild(winSound);
loseSound.src = 'assets/sounds/lose.wav'

// Reset for newgames.
function reset() {
    chances = 9;
    userGuessSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    document.getElementById("chances").innerHTML = chances;
    document.getElementById("guessesSoFar").innerHTML = userGuessSoFar;
    document.getElementById("wins").innerHTML = winPoints;
    document.getElementById("loses").innerHTML = losePoints;
}

// Functions when user win, lose and fail.
function wins() {
    winPoints++;
    document.getElementById("wins").innerHTML = winPoints;
    alert(" You win !! ");
    winSound.play();
    reset();
}
function loses() {
    losePoints++;
    document.getElementById("loses").innerHTML = losePoints;
    alert(" You lose !! ");
    loseSound.play();
    reset();
}
function fail(userGuess) {
    chances--;
    document.getElementById("chances").innerHTML = chances;
    userGuessSoFar.push(userGuess);
    blank();
}

// Making ", " for userGuessSoFar. 
function blank() {
  document.getElementById("guessesSoFar").innerHTML = "" ;
  for (i = 0; i < userGuessSoFar.length; i++ ) {
    if(i === userGuessSoFar.length-1){
      document.getElementById("guessesSoFar").innerHTML += userGuessSoFar[i];
    } else {
      document.getElementById("guessesSoFar").innerHTML += userGuessSoFar[i] + ", ";
    }
  }
}

reset();

// Event on pressed
document.onkeypress = function(event) {
  var userGuess = event.key;
  if (userGuess === computerGuess) {
    wins();
  } 
  else if ( chances === 0 ) {
    loses();
  } 
  else {
    fail(userGuess);
  } 
}