var URL = "http://a51cbfe4.ngrok.io/graficos/total"
var duvidas = []

fetch(URL)
	.then(response => {
		if (response.ok) {
			return response.json()
		}
	})
	.then(lista => {
    console.log(lista)
    duvidas = lista
	})

// var duvidas = [{data:"24/08", qtd: 77, status: "DEU_RUIM"},
//  {data:"25/08", qtd: 59, status: "DEU_RUIM"},
//   {data:"26/08", qtd: 15, status: "SE_LIGA"},
//   {data:"25/08", qtd: 5, status: "SUSSA"}]
montaGrafico(duvidas)
