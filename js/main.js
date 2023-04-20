const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
}

controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode)
    atualizaEstatistica(evento.target.dataset.peca)
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]")

  if (operacao === "-") {
    peca.value = parseInd(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatistica(peca) {
  estatistica.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}
//verifica se toda a aplicação foi carregada antes de enviar o alert

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    alert("Nosso planeta foi invadido, nos ajude a montar e iniciar a produção do nosso robo Full Stack para combater as forças do mal e entregar nosso projeto a tempo!");
  }, 500);
});
