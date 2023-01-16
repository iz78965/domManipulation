console.log("hello")


// let title = document.getElementById("title")
// console.log(title)
// console.log(title.innerText)
let redDiv = document.querySelector('#red')
let green = document.getElementById('green')
let yellow = document.getElementById('yellow')
const clearButton = document.getElementById("clear")

const timeclicked = {'red': 0, "green": 0, "yellow": 0}
let squreButtons = document.querySelectorAll('.bottonsColor')
// console.log(squreButtons)
// console.log(squreButtons[0].value)
squreButtons.forEach(button => {
    button.onclick =  () => {
        timeclicked[button.value] += 1
        button.innerText = timeclicked[button.value]
    }
});

clearButton.onclick = () => clearValue()
const clearValue = () => {
    squreButtons.forEach(button => {
        button.innerText = ''
    })
}



