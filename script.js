const mensagem = `Oii Polaca, tudo bem?
Acabei atrasando seu presente, mas cá estou! Já faz um tempo que nos conhecemos e, a cada dia, fico mais interessado em descobrir mais sobre você.
Mesmo que não estejamos conversando muito ultimamente, saiba que eu te amo, viu?
Pensei bastante sobre isso e, querendo ou não, essa é uma palavra muito forte para mim. Acredito que você merece ouvir isso de mim.
Tenho um carinho enorme por você. Só não te mando mensagens com mais frequência porque penso que posso estar te atrapalhando.
Mas, sem brincadeira, você me deixa entretido! Adoro passar um tempo conversando e jogando com você, sinto saudades da BECKS e… muita kkkkk.
Perdão pelo presente atrasado, mas eu fiz com todo o meu carinho.
E mesmo você me dizendo “não gosto de comemorar meu aniversário”, agora você vai gostar! Afinal, é o dia do seu nascimento, o dia em que essa pessoa incrível veio ao mundo.
Enquanto você estiver comigo, vamos celebrar essa data maravilhosa, independentemente das coisas acontecendo na sua vida. Tudo vai dar certo, sabe por quê? Porque você tem a vontade de fazer as coisas acontecerem.
Eu poderia dizer “curta seu dia”, mas todo dia é seu dia. Viva sua vida!
Um beijo e um abraço bem apertado do Lucão. Te amo, Polaca azeda! 🩵`;

const textoElemento = document.getElementById('mensagem');
const foto = document.getElementById('foto');
const replayBtn = document.getElementById('replay');
const musica = document.getElementById('musica');

let index = 0;
let speed = 60; // velocidade de digitação

function digitarTexto() {
  if (index < mensagem.length) {
    textoElemento.innerHTML += mensagem.charAt(index);
    index++;
    setTimeout(digitarTexto, speed);
  } else {
    foto.style.display = 'block';
  }
}

// Botão para tocar música (contorno do bloqueio de autoplay)
musica.pause();
const playMusicBtn = document.createElement('button');
playMusicBtn.textContent = '▶️ Tocar Música';
playMusicBtn.style.marginTop = '20px';
playMusicBtn.style.padding = '10px 20px';
playMusicBtn.style.fontSize = '1em';
playMusicBtn.style.cursor = 'pointer';
playMusicBtn.style.backgroundColor = '#5ecfff';
playMusicBtn.style.color = 'white';
playMusicBtn.style.border = 'none';
playMusicBtn.style.borderRadius = '5px';
document.querySelector('.container').appendChild(playMusicBtn);

playMusicBtn.addEventListener('click', () => {
  musica.play();
  playMusicBtn.style.display = 'none';
});

replayBtn.addEventListener('click', () => {
  index = 0;
  textoElemento.innerHTML = '';
  foto.style.display = 'none';
  digitarTexto();
});

// ===== Fundo animado =====
const canvas = document.getElementById('fundo');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Linha(x, y, speed, length) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.length = length;
}

const linhas = [];
for (let i = 0; i < 50; i++) {
  linhas.push(new Linha(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1 + 0.5, Math.random() * 100 + 50));
}

function drawHeart(ctx, x, y, size) {
  ctx.fillStyle = '#5ecfff';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size / 2, x, y + size * 0.75, x, y + size);
  ctx.bezierCurveTo(x, y + size * 0.75, x + size, y + size / 2, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fill();
}

const hearts = [];
for (let i = 0; i < 20; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 0.7 + 0.2
  });
}

function animarFundo() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Linhas azul clarinho
  ctx.strokeStyle = '#a0e0ff';
  ctx.lineWidth = 1;
  linhas.forEach(l => {
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x, l.y + l.length);
    ctx.stroke();
    l.y += l.speed;
    if (l.y > canvas.height) l.y = -l.length;
  });

  // Corações azul 💙
  hearts.forEach(h => {
    drawHeart(ctx, h.x, h.y, h.size);
    h.y += h.speed;
    if (h.y > canvas.height) h.y = -h.size;
  });

  requestAnimationFrame(animarFundo);
}

// ===== Inicializa animações =====
digitarTexto();
animarFundo();
