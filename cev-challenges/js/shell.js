const containerElement = document.querySelector('#container')
const bodyElement = document.querySelector('body')

document.querySelector('#send').addEventListener('click', send)

function send() {
    var vet = document.querySelector('#num').value.split(", ")
    containerElement.style.display = 'none'

    var articleElement = document.createElement('article')
    bodyElement.appendChild(articleElement)

    //shellsort
    var value, h = 1
    while(h < vet.length) {
        h = 3 * h + 1
    }
    while(h > 0) {
        for(var i = h; i < vet.length; i++) {
            value = parseInt(vet[i])
            var j = i
            while(j > h - 1 && value <= vet[j - h]) {
                vet[j] = vet[j - h]
                j = j - h;
            }
            vet[j] = value
        }
        h = Math.round(h/3);
    }

    //number block creation
    vet.forEach(function(item) {
        var Element = document.createElement('div')
        Element.setAttribute('class', 'block')
        Element.appendChild(document.createTextNode(item))
        articleElement.appendChild(Element)
    })

    //return to initial state button
    const returnElement = document.createElement('button')
    returnElement.setAttribute('id', 'back')
    returnElement.appendChild(document.createTextNode('Voltar'))
    bodyElement.appendChild(returnElement)

    document.querySelector('#back').addEventListener('click', restart)

    function restart() {
        bodyElement.removeChild(document.querySelector('article'))
        bodyElement.removeChild(document.querySelector('#back'))
        containerElement.style.display = 'block'
    }
}