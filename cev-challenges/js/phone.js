var appElement = document.querySelectorAll('div[class=block]');
// main
var bgElement = document.querySelector('section[id=phone-screen]');
var headerElement = document.querySelector('div[id=phone-header]')
var contentElement = document.querySelector('div[id=phone-content]');
var footerElement = document.querySelector('div[id=phone-footer]');

// Google Search
var googleElement = document.querySelector('input[id=search-tool]');
var googlePage = document.querySelector('div[id=google-page]');

googleElement.onclick = function() {
    contentElement.style.display = 'none';
    footerElement.style.display = 'none';
    googlePage.style.display = 'inline';
    headerElement.style.backgroundColor = 'gray';
    bgElement.style.backgroundImage = 'none';
}

// App Screen
var appScreenElement = document.querySelector('div[id=app-screen]');

for (index in appElement) {
    appElement[index].onclick = function() {
        headerElement.style.backgroundColor = 'gray';
        bgElement.style.backgroundImage = 'none';
        contentElement.style.display = 'none';
        footerElement.style.display = 'none';
        aplicScreen.style.display = 'none';

        appScreenElement.style.display = 'inline';
    }
}

// Applications
var aplicElement = document.querySelector('div[id=block-applications]');
var aplicScreen = document.querySelector('div[id=aplic]');

aplicElement.onclick = function() {
    contentElement.style.display = 'none';
    footerElement.style.display = 'none';
    bgElement.style.backgroundImage = 'url(image/phone/bgv2.jpg)';

    aplicScreen.style.display = 'inline';
}

// Home Button
var homeElement = document.querySelector('div[id=home-button]');

homeElement.onclick = function() {
    headerElement.style.backgroundColor = 'transparent';
    appScreenElement.style.display = 'none';
    googlePage.style.display = 'none';
    aplicScreen.style.display = 'none';

    bgElement.style.backgroundImage = 'url(image/phone/bg.jpg)';
    contentElement.style.display = 'inline';
    footerElement.style.display = 'flex';
    footerElement.style.marginTop = '80px';
}