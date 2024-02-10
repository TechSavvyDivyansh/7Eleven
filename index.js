let drink1 = document.getElementById('drink1')
let drink2 = document.getElementById('drink2')
let drink3 = document.getElementById('drink3')

let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')

let juices = document.querySelector('.juices')

let leftDrink = 1
let currentDrink = 2
let rightDrink = 3
let c = 0
let d = 0

juices.innerHTML = `<img src="./imgs/drink${leftDrink}.png" class="juice" id="drink1">
<img src="./imgs/drink${currentDrink}.png" class="juice" id="drink2">
<img src="./imgs/drink${rightDrink}.png" class="juice" id="drink3">`


leftBtn.addEventListener("click", () => {
        c = rightDrink

        rightDrink = currentDrink
        currentDrink = leftDrink
        leftDrink = c


        juices.innerHTML = `<img src="./imgs/drink${leftDrink}.png" class="juice" id="drink1">
        <img src="./imgs/drink${currentDrink}.png" class="juice" id="drink2">
        <img src="./imgs/drink${rightDrink}.png" class="juice" id="drink3">`
})


rightBtn.addEventListener("click", () => {
        c = 0

        c = leftDrink
        d = rightDrink

        leftDrink = currentDrink
        rightDrink = c
        currentDrink = d


        juices.innerHTML = `<img src="./imgs/drink${leftDrink}.png" class="juice" id="drink1">
        <img src="./imgs/drink${currentDrink}.png" class="juice" id="drink2">
        <img src="./imgs/drink${rightDrink}.png" class="juice" id="drink3">`
})


// menu

let menu = document.querySelector('.menu')
let menuIcon = document.querySelector('#menuIcon')

menuIcon.addEventListener("click", () => {
        setTimeout(()=>{
                menuIcon.classList.toggle('bx-x')
        },250)
        menu.classList.toggle('menuActive')
})

// 3 level
let bookmark = document.querySelectorAll('.bookmark>i')
let threeLevel = document.querySelector('.threeLevel')
let colaCaramelbook = document.querySelector('.colaCaramelbook')


bookmark.forEach((item) => {
        item.addEventListener("click", () => {
                bookmark.forEach(element => {
                        element.classList.remove('bxs-circle')
                        element.classList.add('bx-circle')
                })

                item.classList.add('bxs-circle')
        })
})

colaCaramelbook.addEventListener("click", () => {
        bookmark.forEach((item) => {

                
                item.classList.remove('bxs-circle')
                item.classList.add('bx-circle')

        })

        bookmark[1].classList.add('bxs-circle')

})
