let checkBtn = document.getElementById("check-btn")
let textinput = document.getElementById("text-input")
const result = document.getElementById("result")

checkBtn.addEventListener("click", function() {
    result.textContent = textinput.value;
})
