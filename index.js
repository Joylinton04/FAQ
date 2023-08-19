const mainContent = document.querySelectorAll('.main-content')
const answer = document.querySelectorAll('.answer')
const span = document.querySelector('.span')


for(let i = 0; i < mainContent.length; i++) {
        mainContent[i].addEventListener('click', function(){
            this.classList.toggle('active')
            console.log(this)
    })
} 

let seconds = 00
let minutes = 00
let hours = 00
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

function add() {
    seconds++
    if(seconds / 60 === 1 ) {
        seconds = 00
        minutes++
    }
    if(minutes / 60 === 1 ) {
        minutes = 00
        hours++
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds
    } else{
        leadingSeconds = seconds
    }
    if(minutes < 10) {
        leadingMinutes = "0" + minutes
    } else{
        leadingMinutes = minutes
    }
    if(hours < 10) {
        leadingHours = "0" + hours
    } else{
        leadingHours = hours
    }

    span.textContent = leadingHours + ":" + leadingMinutes+ ":" + leadingSeconds
    
    console.log(seconds)
}

window.addEventListener('click', function() {
    setInterval(add, 1000)
})



















/* let opened = false

for(let i = 0; i < mainContent.length; i++) {
    mainContent[i].addEventListener('click', function(){
        if(opened === false) {
            answer[i].style.display = "block"
            opened = true
        } else if (opened === true){
            answer[i].style.display = "none"
            opened = false
        }
    })
} */



