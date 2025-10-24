const texto = `Oii Polaca, tudo bem?
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

const msgEl = document.getElementById('mensagem');
const foto = document.getElementById('foto');
const replay = document.getElementById('replay');
let i = 0;

function digitar() {
  if (i < texto.length) {
    msgEl.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 35);
  } else {
    foto.style.display = 'block';
  }
}

replay.addEventListener('click', () => {
  i = 0;
  msgEl.textContent = '';
  foto.style.display = 'none';
  digitar();
});

digitar();

// Fundo animado
const canvas = document.getElementById('fundo');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];
let t = 0;

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(255,0,0,0.3)';
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x += 20) {
    let y = Math.sin((x + t) * 0.02) * 30 + canvas.height / 2;
    ctx.lineTo(x, y);
  }
  ctx.stroke();

  hearts.forEach((h, index) => {
    h.y += h.speed;
    if (h.y > canvas.height) hearts.splice(index, 1);
    ctx.fillStyle = 'rgba(255,50,50,0.8)';
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x - 3, h.y - 5, h.x - 8, h.y + 5, h.x, h.y + 10);
    ctx.bezierCurveTo(h.x + 8, h.y + 5, h.x + 3, h.y - 5, h.x, h.y);
    ctx.fill();
  });

  if (Math.random() < 0.05) {
    hearts.push({ x: Math.random() * canvas.width, y: -10, speed: 1 + Math.random() * 1.5 });
  }

  t += 2;
  requestAnimationFrame(drawBackground);
}

drawBackground();
