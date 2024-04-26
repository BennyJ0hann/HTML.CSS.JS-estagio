const quadrado = document.getElementById('personagem');
let posX = 0;
let posY = 29.8;
const step = 2;

var funcaoJaAcionada = false;
var funcaoJaAcionada2 = false;



var personagemMov = document.getElementById("personagem");
const larguraDaTelaPixels = window.innerWidth;
const larguraDaTelaVW = (larguraDaTelaPixels / window.innerWidth) * 100;
let moveInterval;

  function moveSquare(event) {
    switch(event.key) {
      case 'w':
    if (personagemMov.classList.contains("esquerda")) {
        personagemMov.classList.add("Pular2");
        setTimeout(() => personagemMov.classList.remove('Pular2'), 990);
        quadrado.classList.add('pulo'); 
        setTimeout(() => quadrado.classList.remove('pulo'), 990);

    } else {
        personagemMov.classList.add("Pular");
        setTimeout(() => personagemMov.classList.remove('Pular'), 990);
    } 
    verificarPosicao();
    void elemento.offsetWidth;
    break;
      case 'a':
        posX -= step;
        personagemMov.classList.add("esquerda");
        if (posX- step < -2) {
          posX += step;
      }
      verificarPosicao();
        break;
      case 's':
        
        break;
      case 'd':
        personagemMov.classList.remove("esquerda");
        posX += step;
        if (posX + step > larguraDaTelaVW - 4) {
          posX -= step;
      }
      verificarPosicao();
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



function verificarPosicao() {
  var background = document.getElementById("background");
  var background2 = document.getElementById("background2");
  var background3 = document.getElementById("background3");
  var background4 = document.getElementById("background4");


  var cor = document.getElementById('cor');


  var larguraJanela = window.innerWidth;
  var posicaoDiv = personagemMov.getBoundingClientRect().left;

  var terco = larguraJanela / 3;

  if (posicaoDiv < terco) {
      background.className = 'sol2';
      background2.className = 'sol';
      background3.className = 'background first';
      background4.className = 'cloud4';

      removerPingosDeAgua();


      
  } else if (posicaoDiv < terco * 2) {
      background.className = 'cloud';
      background2.className = 'cloud2';
      background3.className = 'cloud3';
      cor.className = 'background second';

      background4.className = 'relampago';
      setTimeout(() => background4.classList.add("flash"), 5000);
      setTimeout(() => background4.classList.remove('flash'), 5500);
      
      adicionarPingosDeAgua()
      removerEstrelas()
      
      } else {
      background.className = 'lua';
      background2.className = 'background first';
      background3.className = 'background third';
      removerPingosDeAgua();

      adicionarEstrelas()



  }
  
}
window.onload = window.onresize = verificarPosicao;


function moveRect() {
  xPos += direction * speed;
  retangulo.style.right = xPos + 'px';
  requestAnimationFrame(moveRect);
}

moveRect(); 

function adicionarPingosDeAgua() {
  var cloud = document.getElementById('background');
  var cloud2 = document.getElementById('background2');
  var cloud3 = document.getElementById('background3');

  var larguraNuvem = cloud.offsetWidth;
  var alturaNuvem = cloud.offsetHeight;

  var larguraNuvem2 = cloud2.offsetWidth;
  var alturaNuvem2 = cloud2.offsetHeight;

  var larguraNuvem3 = cloud3.offsetWidth;
  var alturaNuvem3 = cloud3.offsetHeight;

  if (!funcaoJaAcionada) {
    for (var i = 0; i < 20; i++) {
      var raindrop = document.createElement('div');
      var raindrop2 = document.createElement('div');
      var raindrop3 = document.createElement('div');
      
      raindrop.className = 'raindrop';
      raindrop.style.left = Math.random() * larguraNuvem + 'px';
      raindrop.style.top = Math.random() * alturaNuvem + 'px';

      raindrop2.className = 'raindrop';
      raindrop2.style.left = Math.random() * larguraNuvem2 + 'px';
      raindrop2.style.top = Math.random() * alturaNuvem2 + 'px';
      
      raindrop3.className = 'raindrop';
      raindrop3.style.left = Math.random() * larguraNuvem3 + 'px';
      raindrop3.style.top = Math.random() * alturaNuvem3 + 'px';

      cloud.appendChild(raindrop);
      cloud2.appendChild(raindrop2);
      cloud3.appendChild(raindrop3);

  }
    funcaoJaAcionada = true;
}
  
}

window.onload = adicionarPingosDeAgua;

function removerPingosDeAgua() {
  var raindrops = document.querySelectorAll('.raindrop');
  raindrops.forEach(function(raindrop) {
    raindrop.parentNode.removeChild(raindrop);
  });

  funcaoJaAcionada = false;
}



function adicionarEstrelas() {
  var ceu = document.getElementById('background3');

  var larguraTela2 = ceu.offsetWidth;
  var alturaTela2 = ceu.offsetHeight;


  if (!funcaoJaAcionada2) {
    for (var i = 0; i < 20; i++) {
      var estrela = document.createElement('div');
      
      estrela.className = 'estrela';
      estrela.style.left = Math.random() * larguraTela2 + 'px';
      estrela.style.top = Math.random() * alturaTela2 + 'px';

      

      ceu.appendChild(estrela);
      

  }
    funcaoJaAcionada2 = true;
}
}
function removerEstrelas() {
  var estrelas = document.querySelectorAll('.estrela');
  estrelas.forEach(function(estrela) {
    estrela.parentNode.removeChild(estrela);
  });

  funcaoJaAcionada2 = false;
}
