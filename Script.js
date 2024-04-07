var first_screen = document.querySelector('.first')
var second_screen = document.querySelector('.second')
var third_screen = document.querySelector('.third')
var fourth_screen = document.querySelector('.fourth')
var fifth_screen = document.querySelector('.fifth')
var sixth_screen = document.querySelector('.sixth')
var first_button = document.querySelector('.first-btn')
var second_button = document.querySelector('.second-btn')
var third_button = document.querySelector('.third-btn')
var fourth_button = document.querySelector('.fourth-btn')
var fifth_button = document.querySelector('.fifth-btn')
var sixth_btns = document.querySelectorAll('.sixth-btn')

function toSecond(){
    first_screen.style.display = 'none'
    second_screen.style.display = 'block'
}

function toThird(){
    first_screen.style.display = 'none'
    third_screen.style.display = 'block'
}

function toFourth(){
    first_screen.style.display = 'none'
    fourth_screen.style.display = 'block'
}

function toFifth(){
    first_screen.style.display = 'none'
    fifth_screen.style.display = 'block'
}

function toSixth(){
    first_screen.style.display = 'none'
    sixth_screen.style.display = 'block'
}

function toFirst(){
    first_screen.style.display = 'block'
    second_screen.style.display = 'none'
    third_screen.style.display = 'none'
    fourth_screen.style.display = 'none'
    fifth_screen.style.display = 'none'
    sixth_screen.style.display = 'none'
}


first_button.addEventListener('click', toSecond)
second_button.addEventListener('click', toThird)
third_button.addEventListener('click', toFourth)
fourth_button.addEventListener('click', toFifth)
fifth_button.addEventListener('click', toSixth)

for (btn in sixth_btns){
    sixth_btns[btn].addEventListener('click', toFirst)
}