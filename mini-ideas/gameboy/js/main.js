//Setup Status Values
var gameStarted = false;
var gameEnded = false;
var selectStatus = false;

//Game Start
document.querySelector('#start').addEventListener('click', startGame)

function startGame() {
    if(gameStarted == false) {
        gameStarted = true;

        //Setting up the Game Table
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

        //Movements
        document.querySelector('#up').addEventListener('click', upBtn)
        document.querySelector('#down').addEventListener('click', downBtn)
        document.querySelector('#left').addEventListener('click', leftBtn)
        document.querySelector('#right').addEventListener('click', rightBtn)
        document.querySelector('#a').addEventListener('click', aBtn)
        document.querySelector('#b').addEventListener('click', bBtn)
        document.querySelector('#select').addEventListener('click', selectBtn)

        function upBtn() {
            if(gameEnded == false && selectStatus == false) {
                if(playerPositionY > -149) {
                    playerPositionY += -22
                    playerElement.style.marginTop = playerPositionY + 'px'
                    playerElement.style.transform = 'rotate(0deg)'
                } else {
                    impossibleMovement()
                }
            }
        }

        function downBtn() {
            if(gameEnded == false && selectStatus == false) {
                if(playerPositionY < -17) {
                    playerPositionY += 22
                    playerElement.style.marginTop = playerPositionY + 'px'
                    playerElement.style.transform = 'rotate(180deg)'
                } else {
                    impossibleMovement()
                }
            }
        }

        function leftBtn() {
            if(gameEnded == false && selectStatus == false) {
                if(playerPositionX > 5) {
                    playerPositionX += -27
                    playerElement.style.marginLeft = playerPositionX + 'px'
                    playerElement.style.transform = 'rotate(270deg)'
                } else {
                    impossibleMovement()
                }
            }
        }

        function rightBtn() {
            if(gameEnded == false && selectStatus == false) {
                if(playerPositionX < 167) {
                    playerPositionX += +27
                    playerElement.style.marginLeft = playerPositionX + 'px'
                    playerElement.style.transform = 'rotate(90deg)'
                } else {
                    impossibleMovement()
                }
            }
        }

        function aBtn() {
            if(gameEnded == false && selectStatus == false) {
                if(playerPositionX == crownPositionX && playerPositionY == crownPositionY + 2) {
                    screen.removeChild(tableElement)

                    var winElement = document.createElement('p')
                    winElement.setAttribute('class', 'msg')
                    winElement.appendChild(document.createTextNode('GAME OVER!'))
                    screen.appendChild(winElement)
                    gameEnded = true;
                }
            }
        }

        function selectBtn() {
            if(gameEnded == false && selectStatus == false) {
                selectStatus = true
                // document.querySelector('#config').style.display = 'block';

                var selectElement = document.createElement('div')
                selectElement.setAttribute('id', 'config')

                for(i = 0; i < 2; i++) {
                    var moveCommandBlock = document.createElement('div')
                    moveCommandBlock.setAttribute('class', 'buttonBlock')

                    var buttonImg = document.createElement('img')
                    buttonImg.setAttribute('class', 'buttonImg')

                    moveCommandBlock.appendChild(buttonImg)
                    if(i == 0) {
                        buttonImg.setAttribute('src', 'img/move.png')
                        moveCommandBlock.appendChild(document.createTextNode('Move'))
                    }
                    else {
                        buttonImg.setAttribute('src', 'img/a.png')
                        moveCommandBlock.appendChild(document.createTextNode('Interact'))
                    }

                    selectElement.appendChild(moveCommandBlock)
                }
                
                var closeButton = document.createElement('div')
                closeButton.setAttribute('class', 'closeBlock')

                var imgB = document.createElement('img')
                imgB.setAttribute('src', 'img/b.png')

                closeButton.appendChild(imgB)
                closeButton.appendChild(document.createTextNode('close'))

                selectElement.appendChild(closeButton)

                screen.appendChild(selectElement)
            }
        }

        function bBtn() {
            if(selectStatus == true) {
                selectStatus = false
                screen.removeChild(document.querySelector('#config'))
            }
        }
    }
}

function impossibleMovement() {
    var alertBox = document.createElement('div')
    alertBox.setAttribute('id', 'test')
    alertBox.appendChild(document.createTextNode('Movimento inválido!'))
    document.querySelector('aside').appendChild(alertBox);
    setTimeout(function() { document.querySelector('aside').removeChild(alertBox) }, 4000)
}