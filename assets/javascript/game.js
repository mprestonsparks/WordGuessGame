// DECLARE VARIALBES
var wordList = [];
var activeWord;
var activeWordLetters = [];
var correctKeysEntered = ["b", "a", "r"];
var lettersEntered = [];

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
}


var correctLettersToPush = [];
function seperateCorrect() {
    for (i=0; i<=lettersEntered.length; i++) {
        
        if ((lettersEntered.indexOf(activeWordLetters[i])) != -1) {
            correctLettersToPush.push(activeWordLetters[i]);
        }
    }
    console.log("correctLettersToPush: " + correctLettersToPush);


    for (i=0; i<=correctLettersToPush.length; i++) {
    correctKeysEntered[i] = correctLettersToPush[i];
    }
    console.log("correctKeysEntered: " + correctKeysEntered);

};




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


var textToWrite;

window.onload = function () {

for (i=0; i < activeWord.length; i++) {
var para = document.createElement("span"); 
para.setAttribute("id","letter" + i);                      // Create a <p> element
// letterNum = activeWord.indexOf(correctKeysEntered[i])
textToWrite = "____";
var t = document.createTextNode(textToWrite);      // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.getElementById("letters").appendChild(para); 
    }

what();
function what () {
    // document.getElementById("letter0").innerHTML = "this text";
    
    for (i=0; i<lettersToPush.length; i++) {
    // find the right div
    var rightDiv = "letter" + lettersToPush[i];

    testVar = lettersToPush[i];
    testVar2 = activeWord[testVar];
    document.getElementById(rightDiv).innerHTML = testVar2;
    }

    
};
}

// WRITE correctKeysEntered to lettersToPush ARRAY
var lettersToPush = [];

for (i=0; i < (correctKeysEntered.length); i++) {
    var test1 = correctKeysEntered[i];
    var test3 = activeWord.includes(test1);
    if (test3) {
        var testA = activeWord.indexOf(correctKeysEntered[i]);
        lettersToPush.push(testA);
    }
}

console.log("lettersToPush: " + lettersToPush);

