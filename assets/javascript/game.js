// DECLARE VARIALBES
var wordList = [];
var activeWord;
var activeWordLetters = [];
var correctKeysEntered = ["b", "r"];
var lettersEntered = [];

var guessLimit = 5;
var guessesLeft;
var gameStatus;
var compScore = 0;
var roundNum;
////// GAME LOGIC

// CREATE WORD LIST
wordList = [
    "a",
    "foo",
    "bar",
    "fooba"
]
console.log(wordList);


// SELECT RANDOM WORD FROM LIST
activeWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log("activeWord: " + activeWord);



// PUT ACTIVE WORD'S LETTERS IN AN ARRAY
for (var i = 0; i < activeWord.length; i++) {
    activeWordLetters.push(activeWord[i]);
}



// DETECT KEY PRESSED, PUSH IT TO THE lettersEntered ARRAY

var keyPressed;
function myFunction(e) {
    keyPressed = e.key;
    lettersEntered.push(keyPressed);
        
    seperateCorrect();
    calcGuessesLeft();
    console.log("correctKeysEntered: " + correctKeysEntered);
}


function seperateCorrect() {
    for (i=0; i<=lettersEntered.length; i++) {
        
        if ((lettersEntered.indexOf(activeWordLetters[i])) != -1) {
            correctKeysEntered.push(activeWordLetters[i]);
        }
    }
}


    



// PAGE FORMATTING
// -- HIDE UNNECESSARY WORD SPACES
window.onload = function() {
    switch(activeWord.length - 1) {
        case 0:
        // document.getElementById("letter1").style.display = "none";
            document.getElementById("letter2").style.display = "none";
            document.getElementById("letter3").style.display = "none";
            document.getElementById("letter4").style.display = "none";
            document.getElementById("letter5").style.display = "none";
            break;
        case 1:
            // document.getElementById("letter1").style.display = "none";
            // document.getElementById("letter2").style.display = "none";
            document.getElementById("letter3").style.display = "none";
            document.getElementById("letter4").style.display = "none";
            document.getElementById("letter5").style.display = "none";
            break;
        case 2:
            // document.getElementById("letter1").style.display = "none";
            // document.getElementById("letter2").style.display = "none";
            // document.getElementById("letter3").style.display = "none";
            document.getElementById("letter4").style.display = "none";
            document.getElementById("letter5").style.display = "none";
            break;
        case 3:
            // document.getElementById("letter1").style.display = "none";
            // document.getElementById("letter2").style.display = "none";
            // document.getElementById("letter3").style.display = "none";
            // document.getElementById("letter4").style.display = "none";
            document.getElementById("letter5").style.display = "none";
            break;
        case 4:
            // document.getElementById("letter1").style.display = "none";
            // document.getElementById("letter2").style.display = "none";
            // document.getElementById("letter3").style.display = "none";
            // document.getElementById("letter4").style.display = "none";
            // document.getElementById("letter5").style.display = "none";
    }
}


// PUSH THE CORRECT LETTERS ENTERED TO THEIR RESPECTIVE IDs ON THE PAGE

window.onload = function () {

    // Create DIVs for letters, assign ID tags, write default text
    for (i=0; i < activeWord.length; i++) {
        var para = document.createElement("span"); // Create element
        para.setAttribute("id","letter" + i); // Give element correct ID tag
        // letterNum = activeWord.indexOf(correctKeysEntered[i])
        var textToWrite = "____"; // write default message for unguessed letter
        var t = document.createTextNode(textToWrite); // Create text node to replace default text
        para.appendChild(t); // Append text to element
        document.getElementById("letters").appendChild(para); // Write text to page 
        };



    writeLettersToPage();
    function writeLettersToPage () {
        // document.getElementById("letter0").innerHTML = "this text";
        for (i=0; i<lettersToPush.length; i++) {
            var rightDiv = "letter" + lettersToPush[i]; // Assign DIV ID based on letter's position in activeWord
                lettersInActiveWord = lettersToPush[i]; // Find letters in activeWord
                letterPosition = activeWord[lettersInActiveWord]; // Find letter's position in activeWord
            document.getElementById(rightDiv).innerHTML = letterPosition; // Write letter to its respective DIV
            };
        };
};

// WRITE correctKeysEntered to lettersToPush ARRAY
var lettersToPush = [];

for (i=0; i < (correctKeysEntered.length); i++) {
    var test1 = correctKeysEntered[i];
    var test3 = activeWord.includes(test1);
    if (test3) {
        var testA = activeWord.indexOf(correctKeysEntered[i]);
        lettersToPush.push(testA);
    };
};

// CALCULATE # OF GUESSES LEFT AND ROUND #
function calcGuessesLeft () {
    if (lettersEntered.length<guessLimit) {
        roundNum = (Math.ceil((lettersEntered.length+1)/5)*5)/guessLimit;
        guessesLeft = (guessLimit * roundNum) - lettersEntered.length
        console.log("USING THE TRUE");
        console.log("guessesLeft: " + guessesLeft);
        console.log("lettersEntered: " + lettersEntered.length);
        console.log("roundNum " + roundNum);
    } else {
        console.log("USING THE FALSE");
        roundNum = (Math.ceil((lettersEntered.length+1)/5)*5)/guessLimit;
        guessesLeft = (guessLimit * roundNum) - lettersEntered.length;
        console.log("guessesLeft: " + guessesLeft);
        console.log("lettersEntered: " + lettersEntered.length);
        console.log("roundNum " + roundNum);
        } 
    }
        
            compScore = compScore + 1;
