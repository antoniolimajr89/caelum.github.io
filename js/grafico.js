function montaGrafico(listaDatas, listaDatasets) {
  var ctx = document.querySelector("#myChart")

  new Chart(ctx, {
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
