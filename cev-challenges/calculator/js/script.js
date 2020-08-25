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

    var keyPress = document.getElementsByClassName('number');
    
    //I should probably figure out a way to get a loop in it

    keyPress[0].onclick = function() {
        screenElement.value += keyPress[0].innerHTML;
    }

    keyPress[1].onclick = function() {
        screenElement.value += keyPress[1].innerHTML;
    }

    keyPress[2].onclick = function() {
        screenElement.value += keyPress[2].innerHTML;
    }

    keyPress[3].onclick = function() {
        screenElement.value += keyPress[3].innerHTML;
    }

    keyPress[4].onclick = function() {
        screenElement.value += keyPress[4].innerHTML;
    }

    keyPress[5].onclick = function() {
        screenElement.value += keyPress[5].innerHTML;
    }

    keyPress[6].onclick = function() {
        screenElement.value += keyPress[6].innerHTML;
    }

    keyPress[7].onclick = function() {
        screenElement.value += keyPress[7].innerHTML;
    }

    keyPress[8].onclick = function() {
        screenElement.value += keyPress[8].innerHTML;
    }

    keyPress[9].onclick = function() {
        screenElement.value += keyPress[9].innerHTML;
    }

    keyPress[10].onclick = function() {
        if(screenElement.value === ''){
            screenElement.value = '0.';
        }
        if(screenElement.value.indexOf('.', '1')===-1) {
            screenElement.value += keyPress[10].innerHTML;
        }
    }
    keyPress[11].onclick = function() {
        screenElement.value = '';
    }

    var opPress = document.getElementsByClassName('op');

    opPress[0].onclick = function() {
        screenElement.value += opPress[0].innerHTML;
    }

    opPress[1].onclick = function() {
        screenElement.value += opPress[1].innerHTML;
    }

    opPress[2].onclick = function() {
        screenElement.value += opPress[2].innerHTML;
    }

    opPress[3].onclick = function() {
        screenElement.value += opPress[3].innerHTML;
    }

    opPress[4].onclick = function() {
        screenElement.value += opPress[4].innerHTML;
    }

    opPress[5].onclick = function() {
        screenElement.value += opPress[5].innerHTML;
    }

    var resultPress = document.querySelector('button[class=result]');

    resultPress.onclick = function() {

        var expression = screenElement.value;
        var mark = 0;
        var readingNumber = '';
        var finalNumber = 0;

        //loop through the screen string
        for(var i = 0; i < expression.length; i++) {
            var found = false;

            //check if the character is a number and not an operator
            for(var j = 0; j < keyboardNumbers.length; j++) {
                if(expression[i] === keyboardNumbers[j]) {
                    found = true;
                }
            }

            //when it gets false (which means that it founds an operator)
            //or it gets to the last element of the loop
            //it'll be stored in a variable and repeat the loop
            if(found === false || expression[i + 1] === undefined) {
                readingNumber = '';

                for(var iteration = mark; iteration < i; iteration++) {
                    readingNumber += expression[iteration];
                    //saving only the number
                }

                if(finalNumber === 0) {
                    finalNumber += parseFloat(readingNumber);
                    var usedOperator = expression[i];
                }

                else {
                    readingNumber += expression[i];
                    //avoid missing the last element
                    var anotherNumber = parseFloat(readingNumber);
                }

                mark = i + 1;
            }
        }

        response = verifyOperator(usedOperator, finalNumber, anotherNumber);

        screenElement.value = response;
    }

    offButton.onclick = function() {
        content.removeChild(calculatorElement);
        content.appendChild(startButton);
    }
}

function verifyOperator(ops, n1, n2) {
    switch(ops) {
        case '%':
            return n1 % n2;
        case '√':
            return 'it doesnt work';
        case 'X':
            return n1 * n2;
        case '÷':
            return n1 / n2;
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
    }
}