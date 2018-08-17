var urlParams = new URLSearchParams(window.location.search)
var nomeCategoria = urlParams.get("categoria")
var nomeCor = urlParams.get("cor")

var URL = "https://dash-forum.herokuapp.com/duvidas/"+nomeCategoria
console.log(URL)
fetch(URL)
	.then(response => {
		if (response.ok) {
			return response.json()
		}
	})
	.then(lista => {
		console.log(lista)
    var titulo = document.querySelector("#nomeCategoria")
    titulo.textContent = nomeCategoria
    titulo.style.color = nomeCor

		lista.forEach(subCategorias => {
			montaCardSubCategoria(subCategorias)
		})
	})


function montaCardSubCategoria(subCategorias) {
	const tplCartao = document.createElement("tpl")

	var subCategoria
	if (subCategorias.nome == "") {
		subCategoria = "Off Topic"
	} else {
		subCategoria = subCategorias.nome
	}

	const cartaoModelo = `
		<div class="card cardCategoria">
			<h2 class="card--titulo" style="color:${nomeCor}">${subCategoria}</h2>
			<p class="card--qtd ${subCategorias.status}">${subCategorias.qtd}</p>
		</div>
	`

	tplCartao.innerHTML = cartaoModelo

	const $cartao = tplCartao.querySelector(".card")

	document.querySelector(".cardPorSubCategoria").insertAdjacentElement("afterbegin", $cartao)
}
