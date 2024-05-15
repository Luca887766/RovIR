function onForward(){
    let x = new XMLHttpRequest()
    x.open("GET","/Forward")
    x.send()
}

function onBack(){
    let x = new XMLHttpRequest()
    x.open("GET","/Back")
    x.send()
}

function onStop(){
    let x = new XMLHttpRequest()
    x.open("GET","/Stop")
    x.send()
}

function onTurnRight(){
    let x = new XMLHttpRequest()
    x.open("GET","/TurnRight")
    x.send()
}

function onTurnLeft(){
    let x = new XMLHttpRequest()
    x.open("GET","/TurnLeft")
    x.send()
}


window.addEventListener('keydown', (e) =>{
    switch(e.key){
            case 'a':
                onTurnLeft();
                break;
            case 'd':
                onTurnRight();
                break;
            case 'w':
                onForward();
                break;
            case 's':
                onBack();
                break;
        }
    });