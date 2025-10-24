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

let index = 0;
let speed = 60; // velocidade mais lenta

function digitarTexto() {
  if (index < mensagem.length) {
    textoElemento.innerHTML += mensagem.charAt(index);
    index++;
    setTimeout(digitarTexto, speed);
  } else {
    foto.style.display = 'block';
  }
}

replayBtn.addEventListener('click', () => {
  index = 0;
  textoElemento.innerHTML = '';
  foto.style.display = 'none';
  digitarTexto();
});

// Fundo animado com linhas vermelhas e corações
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
  linhas.push(new Linha(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*2+1, Math.random()*100+50));
}

function animarFundo() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Linhas vermelhas
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  linhas.forEach(l => {
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x, l.y + l.length);
    ctx.stroke();
    l.y += l.speed;
    if (l.y > canvas.height) l.y = -l.length;
  });

  // Corações
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let size = Math.random()*20+10;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, size/2, 0, Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(animarFundo);
}

digitarTexto();
animarFundo();
