
// DECLARE VARIALBES
var wordList = [];
var activeWord;
var activeWordLetters = [];
var keyEntered = "";
var correctKeysEntered = ["b", "a", "r"];

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
// console.log(activeWordLetters);



// DETERMINE IF KEY PRESSED IS IN THE ACTIVE WORD LIST ARRAY ***FIX THIS
// function myKeyPress(e){
//     var keynum;

//     if(window.event) { // IE                    
//       keynum = e.keyCode;
//     } else if(e.which){ // Netscape/Firefox/Opera                   
//       keynum = e.which;
//     }

//     // alert(String.fromCharCode(keynum));
//   }
//   myKeyPress();
//   console.log(myKeyPress());


var n = activeWord.indexOf(keyEntered); // VARIABLE TO TEST IF KEYENTERED IS A LETTER IN THE WORD
// console.log(n);

if (n != -1) { //IF THE KEY ENTERED IS IN THE WORD
    correctKeysEntered.push(keyEntered);  //THEN PUSH IT TO THE CORRECTKEYS ARRAY
}
// console.log("keyEntered: " + keyEntered);
// console.log("correctKeysEntered: " + correctKeysEntered);




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

var letterNum;
var textToWrite;

window.onload = function () {
for (i=0; i < activeWord.length; i++) {
var para = document.createElement("P"); 
para.setAttribute("id","letter" + i);                      // Create a <p> element
// letterNum = activeWord.indexOf(correctKeysEntered[i])
textToWrite = "test";
var t = document.createTextNode(textToWrite);      // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.getElementById("letters").appendChild(para); 
    }
}

// console.log(activeWord.indexOf(correctKeysEntered[0]));
console.log("letterNum: " + letterNum);
console.log("textToWrite: " + textToWrite);

// window.onload = function () {
// for (i=0; i < activeWord.length; i++) {
// var para = document.createElement("P"); 
// para.setAttribute("id","letter" + i);                      // Create a <p> element
// letterNum = activeWord.indexOf(correctKeysEntered[i])
// textToWrite = activeWord[letterNum];
// var t = document.createTextNode(textToWrite);      // Create a text node
// para.appendChild(t);                                          // Append the text to <p>
// document.getElementById("letters").appendChild(para); 
//     }
// }
var lettersToPush = [];
// WRITE CORRECT LETTERS TO DESPECTIVE IDs
// window.onload= function () {
for (i=0; i < (correctKeysEntered.length - 1); i++) {
//  lookup correctkeysentered position in activeword
// var testArray = [];
var testA = activeWord.indexOf(correctKeysEntered[i]);
lettersToPush.push(testA);
    }
// }
console.log("testA: " + testA);
console.log("testArray: " + lettersToPush);

