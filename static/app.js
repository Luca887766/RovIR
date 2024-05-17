let forward = false;
let back = false;
let stop = false;
let turnLeft = false;
let turnRight = false;
let stopCount = 0;

function onForward() {
    if (forward === false) {
        let x = new XMLHttpRequest()
        x.open("GET", "/Forward")
        x.send()
        stopCount += 1;
        forward = true
        back = false
        turnLeft = false
        turnRight = false
    }
}

function onBack() {
    if (back === false) {
        let x = new XMLHttpRequest()
        x.open("GET", "/Back")
        x.send()
        stopCount += 1;
        forward = false
        back = true
        turnLeft = false
        turnRight = false
    }
}

function onStop() {
    if (stopCount <= 0) {
        let x = new XMLHttpRequest()
        x.open("GET", "/Stop")
        x.send()
        forward = false
        back = false
        turnLeft = false
        turnRight = false
    }
}

function onTurn(c) {
    if (c === 'R') {
        if (turnRight === false) {
            let x = new XMLHttpRequest()
            x.open("GET", "/TurnRight")
            x.send()
            stopCount += 1;
            forward = false
            back = false
            turnLeft = false
            turnRight = true
        }
    } else if (c === 'L') {
        if (turnLeft === false) {
            let x = new XMLHttpRequest()
            x.open("GET", "/TurnLeft")
            x.send()
            stopCount += 1;
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
            onTurn('L');
            break;
        case 'd':
            onTurn('R');
            break;
        case 'w':
            onForward();
            break;
        case 's':
            onBack();
            break;
        default:
            break;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'a' || e.key === 's' || e.key === 'd') {
        stopCount -= 1;
        onStop();
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