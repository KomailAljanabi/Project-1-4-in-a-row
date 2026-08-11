/*-------------------------------- Constants --------------------------------*/
const player = 'A', computer = 'B'
/*-------------------------------- Variables --------------------------------*/
let winning_vertical = [], winning_horizontal = [], winning_cross = []
let locat_Ver = 1, locat_hori = 1, locat_CrossL = 1, locat_CrossR = 61

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

/*-------------------------------- Functions --------------------------------*/
function winning(){

}
function playerClick(){

}
function computerChoice(){
    
}
function resetting(){

}
function playerFirst(){

}
function computerFirst(){

}