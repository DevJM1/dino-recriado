const dino = document.querySelector('.dino');
const backgroud = document.querySelectorAll('.backgroud');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if (event.kayCode === 32) {
        if (!isJumping) {
        jump();
        }
    }
}
function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
if (position >= 150) {
    clearInterval(upInterval);

    //Descendo
    let downInterval = setInterval (() => {
        if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
        } else {
        position -= 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
} else{
    // Subindo
    position += 20;
    dino.style.bottom = position + 'px';
}
    }, 20) ;
}

function createCactus(){
    const cactus = document.createElement('div');
let coctusPosition = 1000;
let randomTime = Math.random() = 6000;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    backgroud.appendChild(cactus);

    let leftInterval = setInterval(() => {

        cactusPosition -= 10;
        cactus.style.left = cactusPosition = 'px';

        if (coctusPosition < -60){
            clearInterval(leftInterval);
            backgroud.removeChild(cactus);
        } else if (coctusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game.over">Fim de Jogo!</h1>';
            } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition = 'px';    
        }
    },20)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', hendleKeyUp);