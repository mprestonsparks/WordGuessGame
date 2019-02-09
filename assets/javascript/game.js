
// DECLARE VARIALBES
var wordList = [];
var activeWord;
var activeWordLetters = [];
var keyEntered = "b";
var correctKeysEntered = ["b"];

// GAME LOGIC

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
console.log(activeWord);



// PUT ACTIVE WORD'S LETTERS IN AN ARRAY
for (var i = 0; i < activeWord.length; i++) {
    activeWordLetters.push(activeWord[i]);
}
console.log(activeWordLetters);



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
console.log(n);

if (n != -1) { //IF THE KEY ENTERED IS IN THE WORD
    correctKeysEntered.push(keyEntered);  //THEN PUSH IT TO THE CORRECTKEYS ARRAY
}
console.log("keyEntered: " + keyEntered);
console.log("correctKeysEntered: " + correctKeysEntered);




// PAGE FORMATTING
// -- HIDE UNNECESSARY WORD SPACES
window.onload = function() {
switch(activeWord.length - 1) {
    case 0:
        // document.getElementById("firstLetter").style.display = "none";
        document.getElementById("secondLetter").style.display = "none";
        document.getElementById("thirdLetter").style.display = "none";
        document.getElementById("fourthLetter").style.display = "none";
        document.getElementById("fifthLetter").style.display = "none";
        break;
    case 1:
        // document.getElementById("firstLetter").style.display = "none";
        // document.getElementById("secondLetter").style.display = "none";
        document.getElementById("thirdLetter").style.display = "none";
        document.getElementById("fourthLetter").style.display = "none";
        document.getElementById("fifthLetter").style.display = "none";
        break;
    case 2:
        // document.getElementById("firstLetter").style.display = "none";
        // document.getElementById("secondLetter").style.display = "none";
        // document.getElementById("thirdLetter").style.display = "none";
        document.getElementById("fourthLetter").style.display = "none";
        document.getElementById("fifthLetter").style.display = "none";
        break;
    case 3:
        // document.getElementById("firstLetter").style.display = "none";
        // document.getElementById("secondLetter").style.display = "none";
        // document.getElementById("thirdLetter").style.display = "none";
        // document.getElementById("fourthLetter").style.display = "none";
        document.getElementById("fifthLetter").style.display = "none";
        break;
    case 4:
        // document.getElementById("firstLetter").style.display = "none";
        // document.getElementById("secondLetter").style.display = "none";
        // document.getElementById("thirdLetter").style.display = "none";
        // document.getElementById("fourthLetter").style.display = "none";
        // document.getElementById("fifthLetter").style.display = "none";
}
}


// PUT THE CORRECT LETTERS GUESSED IN THE CORRECT LETTERS DIV   
// window.onload = function() {
//     for (var i = 0; i =< activeWord.length; i++) {
        
//     }
// }

console.log("correctKeysEntered[0]: "+ correctKeysEntered[0]);


// PUSH THE FIRST CORRECT LETTER TO THE FIRSTLETTER DIV
// CHANGE THIS TO LOOP FOR ALL CORRECT LETTERS ??
window.onload = function() {
document.getElementById("firstLetter").innerHTML = correctKeysEntered[0];
}
console.log(correctKeysEntered[0]);

