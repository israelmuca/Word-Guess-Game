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
var userWins;
var userLoses;
var guessesMax;
var guessesLeft;
var userGuess;
var keysGuessed;
var machineGuess;

//TBD -- Function to get how many tries the user has

//Function to make the machine choose a letter
function randomLetter() {
    var characters = "abcdefghijklmnopqurstuvwxyz";
    return characters.substr( Math.floor(Math.random() * 27), 1);
}

//Load the letter to a variable when the webpage loads
if (window.onload) {
    machineGuess = randomLetter();
}

/*Listen to the user input and write it on userInput, then push it to array keysGuessed 
and send it to HTML with id=keysGuessed */
document.onkeyup = function(event) {
    userGuess = event.key;
    //make sure the game works even if CAPS LOCK is on
    userGuess = userGuess.toLowerCase();

    if (userGuess == machineGuess) {
        //User wins, game ends (go to userWinsFunction())
    } else {
        //add it to array and keep listening
        //add one to the counter (TriesCounterFunction)
        //show the array to the user (posibly in the same function as the counter)
    }
}

//Function to count how many times the user has tried, and stop the game if there are enough tries
//triesCounterFunction(){}
//Should also probably write the HTML for the tries

//Function to end game when the user looses
//userLoosesFunction(){}

//Function to end game when the user wins
//userWinsFunction(){}

//Function to restart the game when the user clicks on the button