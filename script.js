const texto = `Oii polaca, tudo bem? Acabei que atrasei seu presente mais cá estou eu, já temos um tempo que se conhecemos e cada dia que passa fico mais interessado em saber mais sobre você, por mais que não estamos conversando muito ultimamente saiba que te amo viu? Pensei muito a há um tempo comigo, querendo ou não essa é uma palavra muito forte pra mim e acredito que você merece escutar isso de mim, tenho um carinho absurdo por você, só não te mando mensagens com mais frequência porque penso que estou te atrapalhando, mas sem brincadeira, você me deixa entretido sabe? É uma pessoa que adoro passar um tempo conversando e jogando, sinto saudades da BECKS e muita kkkkkk. Perdão pelo presente atrasado mais eu fiz, e como você já tinha me dito "não gosto de comemorar meu aniversário", mas agora vai gostar, é o dia do seu nascimento, o dia em que essa pessoa incrível veio ao mundo, enquanto você estiver comigo, vamos comemorar essa data incrível, independente das coisas que estão acontecendo na sua vida, tudo vai dar certo sabe porque? Porque você tem a vontade de fazer as coisas acontecerem, eu ia falar pra você curtir seu dia mas todo dia é seu dia, viva sua vida ok? Um beijo e um abraço beeem apertado do Lucão, te amo Polaca azeda!`;

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
