/*

PSEUDOCODE - Here for legacy purposes
- Start by writing the proper scores at the moment.
LET THE USER KNOW ANY KEY IS NOT CAPITAL LETTER
- Have the user define how many tries they have.
- Make the machine choose a random letter.
- Start listening for the user's input and show it as they write.
- Validate the amount of tries the user has used up.
- Have the button make the game start again.
- Display a win or lose animation

NOTE: My pseudocode wasn't as clear for me, so my first attempt was overly complex. Did new pseudocode:

Game begins with button:
  - User clicks keyboard
  guesses available?
  YES:
    - DEDUCT ONE GUESS
    - CHECK CORRECT OR WRONG
        - Correct?
            - User Wins
                - YOU WIN! message
                - post new stats (wins)
                - Restart tries and word show
                - STOP
                - Offers new game (click button)
        - Incorrect?
            - show one guess less left
            - show the array of errors
  NO:
    - YOU LOSE! message
    - post new stats (loses)
    - restart tries and word show
    - STOP
    - offers new game (click button)

- - - - - - -- - - - - - 

TBD later
//User can prechoose how many tries the user wants to have
//User can prechoose which letters are the options (a-z, A-Z, 0-9)
//Function to add the current letter to the array
//Function to reset the array
//Function to reset the HTML's info that has to be reset
*/

//Define all the variables
var userWins = 0;
var userLoses = 0;
var guessesMax = 10; //BIG NO NO, shouldn't be hardcoded!!!!
var guessesLeft = 0;
var userGuess;
var keysGuessed;
var machineGuess;
var arrUserGuesses = new Array;


//Start the game when the button is pressed -- FIX ! ! 
function funStartGame() { 
    document.getElementById("buttonStart").innerHTML = "Restart" // APPEAR NEW "RESTART" BUTTON INSTEAD, which dissapears when the game hasn't started
    machineGuess = funRandomLetter();
    guessesLeft = guessesMax; //Set the amount of tries to guessesMax, to deduct from there
    funGameLogic();
}

//Function to make the machine choose a letter
function funRandomLetter() {
    var characters = "abcdefghijklmnopqurstuvwxyz";
    return characters.substr(Math.floor(Math.random() * 27), 1);
}

//Function for the actual logic of the game
function funGameLogic() {
    document.onkeyup = function(event) {
        userGuess = event.key;
        userGuess = userGuess.toLowerCase(); //make sure the game works even if CAPS LOCK is on

        if (guessesLeft > 1) {
            guessesLeft-=1;
            if (userGuess == machineGuess) {
                funUserWins();
            } else {
                funTried(userGuess);
            }
        } else {
            funUserLoses();
        }
    }
}     

//Function to end game when the user wins
function funUserWins() {
    userWins+=1;
    document.getElementById("idWins").innerHTML = userWins;
    funRestart();
}

//Function to restart the game
function funRestart() {
    machineGuess = funRandomLetter();
    arrUserGuesses = [];
    guessesLeft = guessesMax;
    document.getElementById("idKeysGuessed").innerHTML = arrUserGuesses;
    document.getElementById("idGuessesLeft").innerHTML = guessesLeft;
}

//Function for a failed try
function funTried(pUserGuess) {
    document.getElementById("idGuessesLeft").innerHTML = guessesLeft;
    arrUserGuesses.push(pUserGuess);
    document.getElementById("idKeysGuessed").innerHTML = arrUserGuesses;
}

//Function to end game when the user looses AFTER X tries, not first try
function funUserLoses() {
    userLoses+=1;
    document.getElementById("idLoses").innerHTML = userLoses;
    funRestart();
}