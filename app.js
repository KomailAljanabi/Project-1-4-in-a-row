/*-------------------------------- Constants --------------------------------*/
const player = 'A', computer = 'B'
/*-------------------------------- Variables --------------------------------*/
let winning_vertical = [], winning_horizontal = [], winning_cross = []
let locat_Ver = 1, locat_hori = 1, locat_CrossL = 1, locat_CrossR = 61
let pfCondition = false, cfCondition = false
let playerCoins = [], computerCoins = []

for (let i = 1; i < 8; i++) {
    for (let iter_Vert = 0; iter_Vert < 3; iter_Vert++) {
        winning_vertical.push([locat_Ver, locat_Ver + 1, locat_Ver + 2, locat_Ver + 3])
        locat_Ver++
    }
    locat_Ver = 1 + (i * 10)

}
console.log(winning_vertical)

for (let i = 1; i < 7; i++) {
    for (let iter_hori = 0; iter_hori < 4; iter_hori++) {
        winning_horizontal.push([locat_hori, locat_hori + 10, locat_hori + 20, locat_hori + 30])
        locat_hori += 10
    }
    locat_hori = i + 1
}
console.log(winning_horizontal)

for (let i = 1; i < 4; i++) {
    for (let iterCrossL = 0; iterCrossL < 4; iterCrossL++) {
        winning_cross.push([locat_CrossL, locat_CrossL + 11, locat_CrossL + 22, locat_CrossL + 33])
        locat_CrossL += 10
    }
    locat_CrossL = i + 1
}

for (let i = 1; i < 4; i++) {
    for (let iterCrossR = 0; iterCrossR < 4; iterCrossR++) {
        winning_cross.push([locat_CrossR, locat_CrossR - 9, locat_CrossR - 18, locat_CrossR - 27])
        locat_CrossR -= 10
    }
    locat_CrossR = i + 61
}
console.log(winning_cross)

/*------------------------ Cached Element References ------------------------*/
const resetButton = document.querySelector('#reset')
const pfButton = document.querySelector('#pf')
const cfButton = document.querySelector('#cf')
const locations = document.querySelectorAll('.coinHolder')
const msg = document.querySelector('#Message')
const instruction = document.querySelector('#removeOnPlay')
/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click',)
pfButton.addEventListener('click',)
cfButton.addEventListener('click',)
locations.forEach(
    function (location) {
        location.addEventListener('click', startGame())
    }
)
/*-------------------------------- Functions --------------------------------*/
function winning() {

}
function playerClick() {

}
function computerChoice() {

}
function resetting() {
    msg.textContent = ''
    instruction.textContent = ''
    pfCondition = false
    cfCondition = false
    playerCoins = [], computerCoins = []
    /* locations.forEach(
         function(location){
             location.style('
                 height: 55px;
 width: 7vw;
 margin: 6px 6px 6px 6px;
 background-color: black;
 border-radius: 45%;
                 ')
         }
     )
 }*/
}
function playerFirst() {
    msg.textContent = ''
    instruction.textContent = ''
    pfCondition = true
}
function computerFirst() {
    msg.textContent = ''
    instruction.textContent = ''
    cfCondition = true
    computerChoice()
}

function startGame() {
    msg.textContent = ''
    instruction.textContent = ''
    playerClick()
    winning()
    computerChoice()
    winning()
}