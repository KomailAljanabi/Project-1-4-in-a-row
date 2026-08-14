/*-------------------------------- Constants --------------------------------*/
const player = 'yellow', computer = 'red'

/*-------------------------------- Variables --------------------------------*/
let winning_combos = []
let locat_Ver = 1, locat_hori = 1, locat_CrossL = 1, locat_CrossR = 61
let pfCondition = false, cfCondition = false, gameOver = false
let playerCoins = [], computerCoins = []
let playerPoints = 0, computerPoints = 0

for (let i = 1; i < 8; i++) {
    for (let iter_Vert = 0; iter_Vert < 3; iter_Vert++) {
        winning_combos.push([locat_Ver, locat_Ver + 1, locat_Ver + 2, locat_Ver + 3])
        locat_Ver++
    }
    locat_Ver = 1 + (i * 10)

}
console.log(winning_combos)

for (let i = 1; i < 7; i++) {
    for (let iter_hori = 0; iter_hori < 4; iter_hori++) {
        winning_combos.push([locat_hori, locat_hori + 10, locat_hori + 20, locat_hori + 30])
        locat_hori += 10
    }
    locat_hori = i + 1
}
console.log(winning_combos)

for (let i = 1; i < 4; i++) {
    for (let iterCrossL = 0; iterCrossL < 4; iterCrossL++) {
        winning_combos.push([locat_CrossL, locat_CrossL + 11, locat_CrossL + 22, locat_CrossL + 33])
        locat_CrossL += 10
    }
    locat_CrossL = i + 1
}

for (let i = 1; i < 4; i++) {
    for (let iterCrossR = 0; iterCrossR < 4; iterCrossR++) {
        winning_combos.push([locat_CrossR, locat_CrossR - 9, locat_CrossR - 18, locat_CrossR - 27])
        locat_CrossR -= 10
    }
    locat_CrossR = i + 61
}

console.log(winning_combos)

/*------------------------ Cached Element References ------------------------*/
const resetButton = document.querySelector('#reset')
const pfButton = document.querySelector('#pf')
const cfButton = document.querySelector('#cf')
const locations = document.querySelectorAll('.coinHolder')
const msg = document.querySelector('#Message')
const instruction = document.querySelector('#removeOnPlay')
const plPoints = document.querySelector('#pp')
const coPoints = document.querySelector('#cp')
console.log(locations)

/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', resetting)
pfButton.addEventListener('click', playerFirst)
cfButton.addEventListener('click', computerFirst)
locations.forEach(
    function (location) {
        location.addEventListener('click', startGame)
    }
)

/*-------------------------------- Functions --------------------------------*/
function winning() {
    for (let i = 0; i < winning_combos.length; i++) {
        if (winning_combos[i].every(values => playerCoins.includes(values))) {
            playerPoints += 1
            gameOver = true
            plPoints.textContent = playerPoints
            msg.textContent = 'You Win'
            break
        }
        else if (winning_combos[i].every(values => computerCoins.includes(values))) {
            computerPoints += 1
            gameOver = true
            coPoints.textContent = computerPoints
            msg.textContent = 'Computer Wins'
            break
        }
    }

}
function playerClick(location) {
    checker(location.target, player, playerCoins)
}

function computerChoice() {
    let randomIndex = Math.floor(Math.random() * locations.length)
    let coLocation = locations[randomIndex]

    checker(coLocation, computer, computerCoins)
}

function checker(location, who, toPush) {
    for (let i = 6; i > 0; i--) {
        if (Number(location.id) > 10) {
            let startIndex = Math.floor(Number(location.id) / 10) * 10
            for (let loc of locations) {
                if (Number(loc.id) === startIndex + i) {
                    if (loc.style.backgroundColor === 'black') {
                        loc.style.backgroundColor = who
                        toPush.push(startIndex + i)
                        return
                    }
                }
            }
        }

        else {
            for (let loc of locations) {
                if (Number(loc.id) === i) {
                    if (loc.style.backgroundColor === 'black') {
                        loc.style.backgroundColor = who
                        toPush.push(i)
                        return
                    }
                }
            }
        }

    }
}



function resetting() {
    msg.textContent = ''
    instruction.textContent = ''
    pfCondition = false
    cfCondition = false
    gameOver = false
    playerCoins = [], computerCoins = []
    computerPoints = 0
    playerPoints = 0
    plPoints.textContent = 0
    coPoints.textContent = 0
    locations.forEach(
        function (location) {
            location.style.backgroundColor = 'black'
        }
    )
    
}


function playerFirst() {
    msg.textContent = ''
    instruction.textContent = ''
    pfCondition = true
    cfCondition = false
    gameOver = false
    playerCoins = [], computerCoins = []
    locations.forEach(
        function (location) {
            location.style.backgroundColor = 'black'
        }
    )
}

function computerFirst() {
    msg.textContent = ''
    instruction.textContent = ''
    cfCondition = true
    pfCondition = false
    gameOver = false
    playerCoins = [], computerCoins = []
    locations.forEach(
        function (location) {
            location.style.backgroundColor = 'black'
        }
    )
    
    computerChoice()
}

function startGame(location) {
    if (!gameOver) {
        playerClick(location)
        winning()
    }
    if (!gameOver) {
        computerChoice()
        winning()
    }

}