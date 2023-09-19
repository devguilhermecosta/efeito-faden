
function scroll() {
  const windowTop = (window.scrollY + window.innerHeight) * 0.75;
  const target = document.querySelectorAll('[data-anime]');

  target.forEach((elem) => {
    windowTop > elem.offsetTop ? elem.classList.add('animate') : elem.classList.remove('animate');
  })
}

window.addEventListener("scroll", scroll);


/*
scrollY é a rolagem vertical, em pixels, da viewport;
innerHeigth é a altura interna da janela, é fixa para cada viewport de dispositivor;
element.offsetTop é a distância do elemento filho em relação ao elemento pai;

windowTop armazena 75% da soma entre o scrollY e o innerHeigth da viewport;

reumindo: quando a distância do elemento filho em relação ao topo do seu pai
for menor do que windowTop, então o elemento será animado.
*/