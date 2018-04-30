/*

PSEUDOCODE
- Start by writing the proper scores at the moment.
LET THE USER KNOW ANY KEY IS NOT CAPITAL LETTER
- Have the user define how many tries they have.
- Make the machine choose a random letter.
- Start listening for the user's input and show it as they write.
- Validate the amount of tries the user has used up.
- Have the button make the game start again.
- Display a win or lose animation

*/

//Define all the variables
var userWins = 0;
var userLoses = 0;
var guessesMax = 10; //BIG NO NO, shouldn't be hardcoded!!!!
var guessesTried = 0;
var userGuess;
var keysGuessed;
var machineGuess;
var arrUserGuesses = new Array;

//TBD -- Function to get how many tries the user has

//Function to make the machine choose a letter
//TBD -- user can prechoose which letters are the options (a-z, A-Z, 0-9)
function funRandomLetter() {
    var characters = "abcdefghijklmnopqurstuvwxyz";
    return characters.substr(Math.floor(Math.random() * 27), 1);
}

//Load the letter to a variable when the webpage loads
if (window.onload) {
    machineGuess = funRandomLetter();
}

/*Listen to the user input and write it on userInput, then push it to array keysGuessed 
and send it to HTML with id=keysGuessed */
document.onkeyup = function(event) {
    userGuess = event.key;
    userGuess = userGuess.toLowerCase(); //make sure the game works even if CAPS LOCK is on

    if (userGuess == machineGuess) {
        funUserWins(userGuess, machineGuess);
    } else {
        guessesTried+=1;
        funTriesCounter(guessesTried, userGuess);
    }
}

/* TBD later
//Function to add the current letter to the array

//Function to reset the array

//Function to reset the HTML's info that has to be reset
*/


//Function to count how many times the user has tried, and stop the game if there are enough tries
function funTriesCounter(pGuessesTried, pUserGuess) {
    /* Should:
    - Know how many tries the user wants HARD CODED FOR NOW
    - The letter the user chose
    - Add each letter tried to an array
    - Push the array to the HTML
    - End the game when the tries have ended (funUserLoses()) (needs the machineGuess)
    */
    if (pGuessesTried < guessesMax) {
        console.log(userGuess);
        arrUserGuesses.push(pUserGuess);
        console.log(arrUserGuesses);
        document.getElementById(idKeysGuessed).innerHTML += arrUserGuesses;
    } else {
        funUserLoses();
    }
}

//Function to end game when the user looses
function funUserLoses(pUserGuess, pMachineGuess) {
    userLoses+=1;
    document.getElementById(idLoses).innerHTML = userLoses;
    funRestart();
}

//Function to end game when the user wins
function funUserWins(pUserGuess, pMachineGuess) {
    userWins+=1;
    document.getElementById(idWins).innerHTML = userWins;
    funRestart();
}

//Function to restart the game when the user clicks on the button
function funRestart(pUserGuess, pMachineGuess) {
    /* Should:
    - Get a new letter fir the machine
    - Recreate the array
    - rewrite the HTML to empty
    */

    machineGuess = funRandomLetter();
    arrUserGuesses = [];
    document.getElementById(idKeysGuessed).innerHTML = arrUserGuesses;
    document.getElementById(idGuessesLeft).innerHTML = guessesMax;
}