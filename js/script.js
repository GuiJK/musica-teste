const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");
const caixa = document.querySelector(".caixa");

btnNao.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - caixa.offsetWidth;
  const maxY = window.innerHeight - caixa.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  caixa.style.position = "absolute";
  caixa.style.left = `${randomX}px`;
  caixa.style.top = `${randomY}px`;
});

btnSim.addEventListener("click", () => {
  window.open("https://open.spotify.com/intl-pt/track/2o2xhyri4aJUtgMGkf5P0J?si=67a92d9748c2494e", "_blank");
});