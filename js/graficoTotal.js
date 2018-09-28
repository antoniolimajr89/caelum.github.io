var URL = globals.url+"graficos/total"

fetch(URL)
	.then(response => {
		if (response.ok) {
			return response.json()
		}
	})
	.then(lista => {
		console.log(lista)
		montaGrafico(lista)
	})

