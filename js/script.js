function play(){
const dino = document.querySelector('.dino');
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;
let points = 0;
var Pulo=document.getElementById("Pulo");
var i = 0;
function handleKeyup(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}
function jump(){
    Pulo.play();
    isJumping = true;
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval)
                    isJumping = false;
                }else{
                position -= 20;
                dino.style.bottom = position +'px';
                }
            }, 20);
            
        }else{
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}
function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
            if(cactusPosition < -60){
                points += 1;
                clearInterval(leftInterval);
                background.removeChild(cactus);
                document.getElementById("textpoints").innerHTML = '<h1 class="game-over">Pontuação Atual: ' + points + '</h1>'
            }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
                    clearInterval(leftInterval);
                    document.body.innerHTML = "<div id='fim'><h1> Fim de Jogo </h1><h2>Pontuação Final: " + points + "</h2>" + "<div id='reinicia' onClick=reloading()><h3><a href=#>Jogar Novamente</a></h3></div></div>"
                  }else{
                cactusPosition -= 10;
                cactus.style.left = cactusPosition + 'px';
            }
    }, 20)
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyup);
document.getElementById("textpoints").innerHTML = '<h1 class="game-over">Pontuação Atual: ' + points + '</h1>'
}
play();
function reloading(){
    document.location.reload(true);
}