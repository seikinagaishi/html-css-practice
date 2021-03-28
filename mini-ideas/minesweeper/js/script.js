// Config values
const spotAmount = 80
const bombAmount = 10
const spotPerLine = 10

document.querySelector('article').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

// Match Values
var remainingFlags
var ongoing = false
var bombPosition = []

// Selectors
var setGame      = document.querySelector('#matchBtn')
var board        = document.querySelector('#gameField')
var flagCount    = document.querySelector('#flags')


// Events
setGame.addEventListener('click', startGame)

// Functions
function startGame() {
    ongoing             = true
    board.innerHTML     = ''
    bombPosition        = []
    flagCount.innerText = bombAmount
    remainingFlags      = bombAmount
    setGame.innerText   = 'Reset'

    createBombs()
    console.log(bombPosition)

    for(let i = 0; i < spotAmount; i++) {
        let spot = document.createElement('div')
        spot.setAttribute('class', 'spot')
        spot.id = i

        spot.addEventListener('click', () => checkSpot(spot))
        spot.addEventListener('contextmenu', (event) => flag(spot, event))

        board.appendChild(spot)
    }
}

function createBombs() {
    let spots = spotAmount - 1
    do {
        let position = Math.round( Math.random() * spots )

        if(!bombFind(position)) {
            bombPosition.push(position)
        }

    } while (bombPosition.length < 10)
}

function verifyIfBombExists(bomb, position) {
    return bomb == position
}

function checkSpot(spot) {
    if(ongoing) {
        if(spot.className == 'spot') {
            let position = spot.id

            if(bombFind(position)) {
                bombFound(spot)
                ongoing = false
            }
        
            else {
                normalSpotFound(position)
                checkIfGameClear()
            }
        }
    }
}

function checkIfGameClear() {
    let untochedSpots = document.getElementsByClassName('spot')
    if(untochedSpots.length == 0) {
        ongoing = false
    }
}

function normalSpotFound(position) {
    let spot = document.getElementById(position)
    spot.setAttribute('class', 'spotted')

    let nearBombs = calculateNearBombs(position)

    if(nearBombs) {
        spot.innerText = nearBombs
    }
    else {
        noNearBombs(position)
    }
}

function calculateNearBombs(selected) {
    let nearBombs = 0
    selected = Number(selected)

    if(selected > spotPerLine) {
        // up-left
        if( !((selected / (spotPerLine + 1)) == 1) ) {
            if(bombFind(selected - (spotPerLine + 1))) {
                nearBombs++
            }
        }

        // up
        if(bombFind(selected - spotPerLine)) {
            nearBombs++
        }

        // up-right
        if( !((selected) % 10 == spotPerLine - 1 )) {
            if(bombFind(selected - (spotPerLine - 1))) {
                nearBombs++
            }
        }
    }

    // left
    if(selected % 10 > 0) {
        if(bombFind(selected - 1)) {
            nearBombs++
        }
    }

    // right
    if( !((selected) % 10 == spotPerLine - 1 )) {
        if(bombFind(selected + 1)) {
            nearBombs++
        }
    }

    if(selected < spotAmount - spotPerLine) {
        // bottom-left
        if( !((selected / (spotPerLine + 1)) == 1) ) {
            if(bombFind(selected + (spotPerLine - 1))) {
                nearBombs++
            }
        }

        // bottom-up
        if(bombFind(selected + spotPerLine)) {
            nearBombs++
        }

        // bottom-right
        if( !(selected % 10 == spotPerLine - 1) ) {
            if(bombFind(selected + (spotPerLine + 1))) {
                nearBombs++
            }
        }
    }

    return nearBombs
}

function noNearBombs(selected) {
    selected = Number(selected)
    let pos = []

    if(selected > spotPerLine) {
        // up-left
        if( !((selected / (spotPerLine + 1)) == 1) ) {
            pos.push(selected - (spotPerLine + 1))
        }

        // up
        pos.push(selected - spotPerLine)

        // up-right
        if( !((selected) % 10 == spotPerLine - 1 )) {
            pos.push(selected - (spotPerLine - 1))
        }
    }

    // left
    if(selected % 10 > 0) {
        pos.push(selected - 1)
    }

    // right
    if( !((selected) % 10 == spotPerLine - 1 )) {
        pos.push(selected + 1)
    }

    if(selected < spotAmount - spotPerLine) {
        // bottom-left
        if( !((selected / (spotPerLine + 1)) == 1) ) {
            pos.push(selected + (spotPerLine - 1))
        }

        // bottom-up
        pos.push(selected + spotPerLine)

        // bottom-right
        if( !((selected) % 10 == spotPerLine - 1 )) {
            pos.push(selected + (spotPerLine + 1))
        }
    }

    pos.map((position) => {
        setTimeout(function() {
            normalSpotFound(position)
        }, 5)
    })
}

function bombFound(spot) {
    spot.setAttribute('class', 'spot-bomb')
    let interval = 300
    
    bombPosition.map( (bomb) => {
        // There has to be a better way to do this :P
        setTimeout(function() {
            let bombSpot = document.getElementById(bomb)
            bombSpot.setAttribute('class', 'spot-bomb')
        }, interval)

        interval += 300
    } )
}

function bombFind(position) {
    return bombPosition.find( (bomb) => verifyIfBombExists(bomb, position) )
}

function flag(spot, event) {
    event.preventDefault()

    if(ongoing) {
        if(remainingFlags && spot.className == 'spot') {
            remainingFlags--
            flagCount.innerText = remainingFlags
            spot.setAttribute('class', 'spot-flagged')
    
            spot.addEventListener('contextmenu', (event) => deflag(spot, event))
        }
    }
}

function deflag(spot, event) {
    event.preventDefault()

    if(ongoing) {
        if(spot.className == 'spot-flagged') {
            remainingFlags++
            flagCount.innerText = remainingFlags
            spot.setAttribute('class', 'spot')
            spot.addEventListener('contextmenu', (event) => flag(spot, event))
        }
    }
}