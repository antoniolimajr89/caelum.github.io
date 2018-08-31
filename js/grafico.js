function montaGrafico(duvidasPorDia) {
    var ctx = document.getElementById("myChart");
    console.log(duvidasPorDia)
    var datas = duvidasPorDia.map(duvida => {
        return duvida.data
    })
    var quantidades = duvidasPorDia.map(duvida => {
        return duvida.qtd
    })
    var cores = duvidasPorDia.map(duvida => {
        return coresStatus[duvida.status]
    })
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas,
            datasets: [{
                label: 'Quantidade de Dúvidas sem Respostas às 20hrs',
                data: quantidades,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                lineTension: 0.1,
                pointBorderColor: cores,
                pointBackgroundColor: cores,
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}