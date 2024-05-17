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

function enableAll(){
    eneabled = true;
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
        case 'a':
            a = true;
            onTurn('L');
            break;
        case 'd':
            d = true;
            onTurn('R');
            break;
        case 'w':
            w = true;
            onForward();
            break;
        case 's':
            s = true;
            onBack();
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
            break;
        case 'a':
            a = false;
            onStop();
            break;
        case 's':
            s = false;
            onStop();
            break;
        case 'd':
            d = false;
            onStop();
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