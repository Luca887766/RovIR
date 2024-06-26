let forward = false;
let back = false;
let stop = false;
let turnLeft = false;
let turnRight = false;
let w = false;
let a = false;
let s = false;
let d = false;
let eneabled = false;

function enableAll(sett){
    eneabled = sett;
}

function onForward() {
    if (forward === false && eneabled) {
        let x = new XMLHttpRequest()
        x.open("GET", "/Forward")
        x.send()
        forward = true
        back = false
        turnLeft = false
        turnRight = false
    }
}

function onBack() {
    if (back === false && eneabled) {
        let x = new XMLHttpRequest()
        x.open("GET", "/Back")
        x.send()
        forward = false
        back = true
        turnLeft = false
        turnRight = false
    }
}

function onStop() {
    if (w === false && a === false && s === false && d === false && eneabled) {
        let x = new XMLHttpRequest()
        x.open("GET", "/Stop")
        x.send()
        forward = false
        back = false
        turnLeft = false
        turnRight = false
    } else {
        if (w === true) {
            onForward()
        } if (a === true) {
            onTurn('L')
        } if (s === true) {
            onBack()
        } if (d === true) {
            onTurn('R')
        }
    }
}

function onTurn(c) {
    if (c === 'R' && eneabled) {
        if (turnRight === false) {
            let x = new XMLHttpRequest()
            x.open("GET", "/TurnRight")
            x.send()
            forward = false
            back = false
            turnLeft = false
            turnRight = true
        }
    } else if (c === 'L' && eneabled) {
        if (turnLeft === false) {
            let x = new XMLHttpRequest()
            x.open("GET", "/TurnLeft")
            x.send()
            forward = false
            back = false
            turnLeft = true
            turnRight = false
        }
    }
}

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ' ':
            toSlide('liveRovir');
            enableAll(true);
            simulateButtonClick('startButton');
            break;
        case 'Escape':
            toSlide('startPage');
            enableAll(false);
            break;
        case 'a':
            a = true;
            onTurn('L');
            simulateButtonClick('leftButton');
            break;
        case 'd':
            d = true;
            onTurn('R');
            simulateButtonClick('rightButton');
            break;
        case 'w':
            w = true;
            onForward();
            simulateButtonClick('forwardButton');
            break;
        case 's':
            s = true;
            onBack();
            simulateButtonClick('backButton');
            break;
        case 'p':
            takeshot()
            simulateButtonClick('screenButton');
            break;
        default:
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            w = false;
            onStop();
            simulateButtonRelease('forwardButton');
            break;
        case 'a':
            a = false;
            onStop();
            simulateButtonRelease('leftButton');
            break;
        case 's':
            s = false;
            onStop();
            simulateButtonRelease('backButton');
            break;
        case 'd':
            d = false;
            onStop();
            simulateButtonRelease('rightButton');
            break;
        case 'p':
            simulateButtonRelease('screenButton');
            break;
        case ' ':
            simulateButtonRelease('startButton');
            break;
        default:
            break;
    }
});

function toSlide(id) {
    document.querySelectorAll("div.slide").forEach(function (e) {
        e.classList.add("hidden")
        e.classList.remove("visible")
        e.querySelectorAll("*").forEach(function (e2) {
            e2.tabIndex = "-1"
        })
    })
    let d = document.getElementById(id)
    d.classList.add("visible")
    d.classList.remove("hidden")
    d.querySelectorAll("*").forEach(function (e2) {
        e2.tabIndex = "-1"
    })
}

function simulateButtonClick(buttonId) {
    let button = document.getElementById(buttonId);
    button.classList.add('active'); 
    button.dispatchEvent(new MouseEvent('onmousedown'));
}

function simulateButtonRelease(buttonId) {
    let button = document.getElementById(buttonId);
    button.classList.remove('active'); 
    button.dispatchEvent(new MouseEvent('onmouseup'));
}


function takeshot() {
    let div = document.getElementById('liveRovir');
    html2canvas(div).then(
    function (canvas) {
        console.log(canvas)
        var image = canvas.toDataURL();
        var aDownloadLink = document.createElement('a');
        aDownloadLink.download = 'canvas_image.png';
        aDownloadLink.href = image;
        aDownloadLink.click();
    })
}