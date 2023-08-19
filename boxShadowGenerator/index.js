const app = document.querySelector('#app')
const boxColor = document.querySelector('.box-color')
const options = document.querySelectorAll('.options ul li input')
const inputText = document.querySelector('#text')
const color = document.querySelector('#color')
const copy = document.querySelector('#copy')
let xOffset = 0
let yOffset = 0
let blur = 0
let spread = 0
let shadowColor = `#0000000`
inputText.value = `box-shadow: 0px 0px 0px 0px #0000000`

const generateBoxShadow = ()=> {
    for(let i = 0; i < options.length; i++) {
        const element = options[i];
        element.addEventListener('input', ()=>{
        if(element.id === 'x offset') {
            xOffset = element.value
        } else if(element.id === 'y offset'){
            yOffset = element.value
            console.log(yOffset)
        } else if(element.id === 'blur'){
            blur = element.value
            console.log(blur)
        } else if(element.id === 'spread'){
            spread = element.value
        }
        let boxShadow = ` ${xOffset}px ${yOffset}px ${blur}px ${spread}px ${shadowColor} `
        boxColor.style.boxShadow = boxShadow
        inputText.value = boxShadow
    })
    }
}
generateBoxShadow()

color.addEventListener('input', ()=>{
    shadowColor = color.value
    generateBoxShadow()
})

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(inputText.value);
    copy.style.color = "#ffff"
    setTimeout(()=>{
        copy.style.color = "#000"
    }, 2000)
})