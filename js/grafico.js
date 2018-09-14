function montaGrafico(duvidasPorDia) {
  var ctx = document.querySelector("#myChart")
  console.log(duvidasPorDia)
  var listaDatas = duvidasPorDia.map(duvida => {
    return duvida.data
  })
  var listaQuantidades = duvidasPorDia.map(duvida => {
    return duvida.qtd
  })
  var listaCores = duvidasPorDia.map(duvida => {
    return coresStatus[duvida.status]
  })

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: listaDatas,
      datasets: [{
        label: "Quantidade de Dúvidas sem Respostas às 20hrs",
        data: listaQuantidades,
        fill: false, //pintar a parte de baixo do gráfico
        borderColor: 'rgba(54, 162, 235, 1)', //cor da linha
        borderWidth: 2, //width da linha
        lineTension: 0.1, //curva da linha
        pointBorderColor: listaCores, //cor da borda da bolinha
        pointBackgroundColor: listaCores, //cor da bolinha
        pointRadius: 7, //tamanho da bolinha
        pointStyle: "rectRot" //formato de losango
      }]
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
