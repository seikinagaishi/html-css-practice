document.querySelector('#start').addEventListener('click', startGame)

function startGame() {
    document.querySelector('#begin').style.display = 'none'
    const tableElement = document.createElement('table')
    var screen = document.querySelector('#screen')
    screen.appendChild(tableElement)

    for(var i = 0; i < 7; i++) {
        var trElement = document.createElement('tr')
        tableElement.appendChild(trElement)
        for(var j = 0; j < 7; j++) {
            trElement.appendChild(document.createElement('td'))
        }
    }
    
    var playerElement = document.createElement('div')
    playerElement.setAttribute('id', 'player')
    var goalElement = document.createElement('div')
    goalElement.setAttribute('id', 'goal')

    var playerPositionY = -17
    var playerPositionX = 86
    playerElement.style.marginTop = playerPositionY + 'px'
    playerElement.style.marginLeft = playerPositionX + 'px'
    playerElement.style.backgroundImage = 'url(img/p1.png)'

    var crownPositionY = -107
    var crownPositionX = 5

    goalElement.style.marginTop = crownPositionY + 'px'
    goalElement.style.marginLeft = crownPositionX + 'px'
    goalElement.style.backgroundImage = 'url(img/crown2.png)'

    tableElement.appendChild(goalElement)
    tableElement.appendChild(playerElement)

    document.querySelector('#up').addEventListener('click', upBtn)
    document.querySelector('#down').addEventListener('click', downBtn)
    document.querySelector('#left').addEventListener('click', leftBtn)
    document.querySelector('#right').addEventListener('click', rightBtn)
    document.querySelector('#a').addEventListener('click', aBtn)

    function upBtn() {
        if(playerPositionY > -149) {
            playerPositionY += -22
            playerElement.style.marginTop = playerPositionY + 'px'
            playerElement.style.transform = 'rotate(0deg)'
        } else {
            alert('Impossible move')
        }
    }

    function downBtn() {
        if(playerPositionY < -17) {
            playerPositionY += 22
            playerElement.style.marginTop = playerPositionY + 'px'
            playerElement.style.transform = 'rotate(180deg)'
        } else {
            alert('Impossible move')
        }
    }

    function leftBtn() {
        if(playerPositionX > 5) {
            playerPositionX += -27
            playerElement.style.marginLeft = playerPositionX + 'px'
            playerElement.style.transform = 'rotate(270deg)'
        } else {
            alert('Impossible move')
        }
    }

    function rightBtn() {
        if(playerPositionX < 167) {
            playerPositionX += +27
            playerElement.style.marginLeft = playerPositionX + 'px'
            playerElement.style.transform = 'rotate(90deg)'
        } else {
            alert('Impossible move')
        }
    }

    function aBtn() {
        if(playerPositionX == crownPositionX && playerPositionY == crownPositionY + 2) {
            screen.removeChild(tableElement)

            var winElement = document.createElement('p')
            winElement.setAttribute('class', 'msg')
            winElement.appendChild(document.createTextNode('GAME OVER!'))
            screen.appendChild(winElement)
        }
    }
}