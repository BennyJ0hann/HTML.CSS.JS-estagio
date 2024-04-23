const quadrado = document.getElementById('personagem');
let posX = 0;
let posY = 0;
const step = 10;

var personagemMov = document.getElementById("personagem");


  function moveSquare(event) {
    switch(event.key) {
      case 'w':
        quadrado.classList.add('pulo'); 
        setTimeout(() => quadrado.classList.remove('pulo'), 800);
        personagemMov.classList.add("Pular");
        setTimeout(() => personagemMov.classList.remove("Pular"), 700);


        break;
      case 'a':
        posX -= step;
        personagemMov.classList.add("esquerda");
  
        break;
      case 's':
        posY += step;
        
        break;
      case 'd':
        personagemMov.classList.remove("esquerda");
  
        posX += step;
  
        break;
      default:
        return;
    }
    quadrado.style.top = posY + 'px';
    quadrado.style.left = posX + 'px';
  }

document.addEventListener('keydown', moveSquare);

function changeSprite(event) {
  if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
    personagemMov.classList.remove("Parado");
  }
}

function resetSprite(event) {
  if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
    personagemMov.classList.add("Parado");

  }
}

document.addEventListener('keydown', moveSquare);
document.addEventListener('keydown', changeSprite);
document.addEventListener('keyup', resetSprite);

  personagemMov.classList.add("Parado");








const retangulo = document.querySelector('.retangulo');
let direction = 1; // 1 para baixo, -1 para cima
let xPos = 0 ;
let speed = 5; // velocidade de movimento

function moveRect() {
  xPos += direction * speed;
  retangulo.style.right = xPos + 'px';

  

  requestAnimationFrame(moveRect);
}

moveRect(); // Inicia a animação

