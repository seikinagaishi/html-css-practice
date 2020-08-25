var startButton = document.querySelector('body button[class=start]');

startButton.onclick = function() {
    var content = document.querySelector('body');
    content.removeChild(startButton);

    var calculatorElement = document.createElement('fieldset');
    
    var screenElement = document.createElement('input');
    screenElement.setAttribute('type', 'text');
    screenElement.setAttribute('class', 'screen');
    screenElement.setAttribute('name', 'calculator');
    screenElement.setAttribute('readonly', true);
    calculatorElement.appendChild(screenElement);

    var offButton = document.createElement('button');
    offButton.setAttribute('class', 'turnOff');
    offText = document.createTextNode('OFF');
    offButton.appendChild(offText);
    calculatorElement.appendChild(offButton);

    //----------------------------------------//
    var keyboardElement = document.createElement('div');
    keyboardElement.setAttribute('id', 'keyboard');

    //number pad
    var numbersElement = document.createElement('div');
    numbersElement.setAttribute('id', 'numberPad');

    var keyboardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'C'];
    for (key of keyboardNumbers) {
        var keyElement = document.createElement('button');
        keyElement.setAttribute('class', 'number');
        var keyName = document.createTextNode(key);
        keyElement.appendChild(keyName);
        numbersElement.appendChild(keyElement);
    }
    keyboardElement.appendChild(numbersElement);

    //operators
    var operatorsElement = document.createElement('div');
    operatorsElement.setAttribute('id', 'operators');

    var operatorKeys = ['%', '√', 'X', '÷', '+', '-'];
    for (op of operatorKeys) {
        var operatorElement = document.createElement('button');
        operatorElement.setAttribute('class', 'op');
        var operatorName = document.createTextNode(op);
        operatorElement.appendChild(operatorName);
        operatorsElement.appendChild(operatorElement);
    }
    
    //result
    var equalKey = document.createElement('button');
    equalKey.setAttribute('class', 'result');
    var equalName = document.createTextNode('=');
    equalKey.appendChild(equalName);
    operatorsElement.appendChild(equalKey);

    keyboardElement.appendChild(operatorsElement);

    calculatorElement.appendChild(keyboardElement);
    //----------------------------------------//
    content.appendChild(calculatorElement);

    
}