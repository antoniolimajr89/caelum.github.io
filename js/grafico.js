const $formFiltro = document.querySelector(".formFiltro")
//gera gráfico inicial com total e as categorias que estão somadas no total
atualizaGrafico()

$formFiltro.addEventListener("submit" , function(evento) {
  evento.preventDefault()
  atualizaGrafico()
})


function atualizaGrafico() {
  // pega dados do gráfico do total
  var promiseDoTotal
  var inputTotal = document.querySelector("#total")
  promiseDoTotal = pegaDadosGraficoTotal()

  // pega dados do gráfico das categorias
  console.log($formFiltro.elements)
  var categoriasEscolhidas = Array.from($formFiltro.elements)
  .filter(elemento =>  elemento.nodeName === "INPUT" && elemento.id !== "total")
  .filter(input => input.checked === true)
  .map(inputEscolhido => inputEscolhido.name)
  console.log(categoriasEscolhidas)

  var promiseCategorias = pegaDadosGraficoCategorias(categoriasEscolhidas)

  Promise.all([promiseDoTotal, promiseCategorias])
  .then((respostasDasPromises) => {
    var infosHistoricoTotal = respostasDasPromises[0]
    var listaHistoricosCategorias = respostasDasPromises[1]
    var listaDatasProGrafico = infosHistoricoTotal.datas

    var listaDadosProGrafico = listaHistoricosCategorias
    if (inputTotal.checked === true) {
      listaDadosProGrafico.unshift(infosHistoricoTotal.dados)
    }
    montaGrafico(listaDatasProGrafico, listaDadosProGrafico)
  })
}


var chart
function montaGrafico(listaDatas, listaDatasets) {
  var canvas = document.querySelector("#myChart")
  var ctx = canvas.getContext("2d")
  if (chart != undefined ) {
    chart.destroy()
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: listaDatas,
      datasets: listaDatasets
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true //gráfico começa no 0
          }
        }]
      }
    }
  })
}
