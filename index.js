/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent ="Click here to give your rating"
})

const emoji ={
    53 : "😁",
    52 : "🙂",
    51 : "😐",
    50 : "☹️",
    49 : "🤬"
}

box.addEventListener("keydown", function(KeyboardEvent){
    console.log("key code "+ KeyboardEvent.keyCode)
    text.textContent = "Your Rating " + emoji[KeyboardEvent.keyCode]
})
