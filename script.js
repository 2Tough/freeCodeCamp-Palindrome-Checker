let checkBtn = document.getElementById("check-btn");
let textinput = document.getElementById("text-input");
const result = document.getElementById("result");

let firstHalfWord;
let secondHalfWord;

checkBtn.addEventListener("click", function () {
    if(textinput.value === "") {
        alert("Please input a value")
    } else {
        result.textContent = textinput.value;
        isItAPalindrome(textinput.value);
    }
  
  //  console.log(Array.from(textinput.value)[0])
});
function isItAPalindrome(word) {
    let regex = /[_\-\s\,\\,\/,\(),\.]/g
    let updated = word.replace(regex,"").toLowerCase();
    console.log(updated)

  let lettersArray = updated.split("");

  for (let i = 0; i < lettersArray.length; i++) {
   if (lettersArray[i] === lettersArray[lettersArray.length-1-i]) {
   console.log("lettersArray[i]: " + lettersArray[i])
    console.log("lettersArray[lettersArray.length]: " + lettersArray[lettersArray.length -1-i])
    result.textContent = word + " is a palindrome!"
   } else {
    result.textContent = word + " is not a palindrome!"
    break;
    console.log("Show incorrect i letter: " + lettersArray[i])
    console.log("Show incorrect j letter: " + lettersArray[lettersArray.length -1-i])
   }
    
  }
  console.log(lettersArray);
}
