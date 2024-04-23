let myBod1 = document.getElementById("bobod");
let myBod2 = document.getElementById("bobod2");
let myBod = document.querySelector('body');
let myHtml = document.querySelector('html');
let glit = myHtml.getAttribute('class');
let crit = document.getElementById('troll3');
let parentDiv = document.getElementById('troll4');
var numberOfParagraphs = 100;
var delayBetweenCreation = 30; 
var currentIndex = 0;
let spinner1 = document.getElementById('spinner');

function littletrolling() {
myHtml.classList.add('glitch');
myHtml.style.filter = "invert(100%)";
setTimeout(troll1, 1000);
setTimeout(troll2, 2500);
setTimeout(troll3, 7000);
}

function troll1() {
    myHtml.classList.remove('glitch');
    myHtml.style.filter = "invert(0)";
    myHtml.style.backgroundColor = "black";
    myBod1.style.display = "none";
    myBod.style.backgroundColor = "transparent";
}

function troll2() {
crit.style.display = "block";
myBod.style.width = "75%";
}

function troll3() {
crit.style.display = "none";
myBod.style.width = "100%";
createParagraphWithDelay();
}

function troll4() {
parentDiv.style.display = 'none';
spinner1.style.display = 'block';
setTimeout(function() {
    myBod.style.width = "600px";
    spinner1.style.display = 'none';
    myHtml.classList.add('background');
    myHtml.style.border = "1px solid black";
    myBod2.style.display = "block";
    myBod.style.backgroundColor = "white";
}, 3000);
}

function createParagraphWithDelay() {
    if (currentIndex < numberOfParagraphs) {
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'Fixing current critical error:' + (currentIndex + 1) + '%';
        parentDiv.appendChild(newParagraph);
        currentIndex++;
        setTimeout(createParagraphWithDelay, delayBetweenCreation);
    }
    else {
        troll4();
    }
}