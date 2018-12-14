function pegaDadosGraficoTotal() {
	var URL = globals.url+"graficos/total"

	return fetch(URL)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
		})
		.then(duvidasPorDia => {
			console.log("Qlq coisa")
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

			var datasetTotal = {
				label: "Total",
				data: listaQuantidades,
				fill: false, //pintar a parte de baixo do gráfico
				backgroundColor: 'rgba(100, 54, 54, 1)', //cor do preenchimento
				borderColor: 'rgba(100, 54, 54, 1)', //cor da linha
				borderWidth: 2, //width da linha
				lineTension: 0.1, //curva da linha
				pointBorderColor: listaCores, //cor da borda da bolinha
				pointBackgroundColor: listaCores, //cor da bolinha
				pointRadius: 7, //tamanho da bolinha
				pointStyle: "rectRot" //formato de losango
			  }
			return {'dados': datasetTotal, 'datas': listaDatas}
		})
}
