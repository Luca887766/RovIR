function onAccendi(){
    let x = new XMLHttpRequest()
    x.open("GET","/accendi")
    x.send()
}

function onSpegni(){
    let x = new XMLHttpRequest()
    x.open("GET","/accendi")
    x.send()
}

window.addEventListener('keydown', (e) =>{
    switch(e.key){
            case 'a':
                onAccendi();
                break;
            case 'd':
                onAccendi();
                break;
            case 'w':
                onAccendi();
                break;
            case 's':
                onSpegni();
                break;
        }
    });