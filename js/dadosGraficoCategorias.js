function pegaDadosGraficoCategorias(categorias) {
    var URL = globals.url+"graficos/categorias"

	return fetch(URL)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
		})
		.then(historicoDeTodasAsCategorias => {
			console.log(historicoDeTodasAsCategorias)
            var historicoCategoriasEscolhidas = Array.from(historicoDeTodasAsCategorias).filter((categoria) => {
                return categorias.includes(categoria.nome)
            })
            console.log(historicoCategoriasEscolhidas.reverse())

            var datasetCategorias = historicoCategoriasEscolhidas.map((historicoCategoria) => {
                console.log(historicoCategoria)
                var listaQuantidades = historicoCategoria.historico.map(duvida => {
                    return duvida.qtd
                })
                var nomeCategoria
                if (historicoCategoria.nome == "") {
                    nomeCategoria = "Off Topic"
                } else {
                    nomeCategoria = historicoCategoria.nome
                }

                return {
                    label: nomeCategoria,
                    data: listaQuantidades,
                    fill: false, //pintar a parte de baixo do gráfico
                    backgroundColor: coresCategorias[historicoCategoria.nome], //cor do preenchimento
                    borderColor: coresCategorias[historicoCategoria.nome], //cor da linha
                    borderWidth: 2, //width da linha
                    lineTension: 0.1, //curva da linha
                    pointBorderColor: coresCategorias[historicoCategoria.nome], //cor da borda da bolinha
                    pointBackgroundColor: coresCategorias[historicoCategoria.nome], //cor da bolinha
                    pointRadius: 7, //tamanho da bolinha
                    pointStyle: "rectRot", //formato de losango
                    pointHoverBorderColor: coresCategorias[historicoCategoria.nome],
                    pointHoverBackgroundColor: coresCategorias[historicoCategoria.nome]
                  }
            })
			console.log(datasetCategorias)
			return datasetCategorias
		})
}
