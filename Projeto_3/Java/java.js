const quadrado = document.getElementById('personagem');
let posX = 0;
let posY = 32.5;
const step = 2;

var personagemMov = document.getElementById("personagem");
const larguraDaTelaPixels = window.innerWidth; // Largura da tela em pixels
const larguraDaTelaVW = (larguraDaTelaPixels / window.innerWidth) * 100;
let moveInterval;

  function moveSquare(event) {
    switch(event.key) {
      case 'w':
    // Verifica se a classe 'personagem.esquerda' está presente no elemento
    if (personagemMov.classList.contains("esquerda")) {
        // Se estiver presente, adiciona a classe 'Pular2'
        personagemMov.classList.add("Pular2");
        setTimeout(() => personagemMov.classList.remove('Pular2'), 990);
        quadrado.classList.add('pulo'); 
        setTimeout(() => quadrado.classList.remove('pulo'), 990);

    } else {
        // Caso contrário, adiciona a classe 'Pular'
        personagemMov.classList.add("Pular");
        setTimeout(() => personagemMov.classList.remove('Pular'), 990);
    }
    // Força o navegador a reavaliar o estilo, reiniciando a animação
    void elemento.offsetWidth;
    break;
      case 'a':
        posX -= step;
        personagemMov.classList.add("esquerda");
        if (posX- step < -2) {
          posX += step;
      }
  
        break;
      case 's':
        
        break;
      case 'd':
        personagemMov.classList.remove("esquerda");
        posX += step;
        if (posX + step > larguraDaTelaVW - 4) {
          posX -= step;
      }
  
        break;
      default:
        return;
    }

    
    personagemMov.style.top = posY + 'vw';
    personagemMov.style.left = posX + 'vw';
  }

document.addEventListener('keydown', moveSquare);

function changeSprite(event) {
  if (event.key === 'w' || event.key === 'a'  || event.key === 'd') {
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

