fetch("https://dash-forum.herokuapp.com/duvidas/qtd")
	.then(response => {
		if (response.ok) {
			return response.json()
		}
	})
  .then(infoTotalDuvidas => {
		console.log(infoTotalDuvidas)
		qtdTotalDuvidas(infoTotalDuvidas)
	})

function qtdTotalDuvidas(infoTotalDuvidas) {
  var total = document.querySelector("#total")

  total.textContent = infoTotalDuvidas.qtd
  total.classList.add(infoTotalDuvidas.status)
}
