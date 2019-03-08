var urlParams = new URLSearchParams(window.location.search)
var nomeCategoria = urlParams.get("categoria")
var nomeCor = urlParams.get("cor")

var URL = globals.url+"duvida/"+nomeCategoria
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

	var corStatus = coresStatus[subCategorias.status]

	const cartaoModelo = `
		<div class="card cardCategoria">
			<a class="card--subCategoria" target="_blank" href=${urlForumSubCategoria(subCategorias)}>
				<h2 class="card--titulo" style="color:${nomeCor}">${subCategoria}</h2>
				<p class="card--qtd" style="background-color:${corStatus}">${subCategorias.qtd}</p>
			</a>
		</div>
	`

	tplCartao.innerHTML = cartaoModelo

	const $cartao = tplCartao.querySelector(".card")

	document.querySelector(".cardPorSubCategoria").insertAdjacentElement("afterbegin", $cartao)
}


function urlForumSubCategoria (subCategorias) {
	if(subCategorias == null || subCategorias == undefined ||
		subCategorias.codigo == null || subCategorias.codigo == undefined || subCategorias.codigo == "") {
		return `"https://cursos.alura.com.br/forum/todos/1"`
	} else {
		return `"https://cursos.alura.com.br/forum/subcategoria-${subCategorias.codigo}/sem-resposta/"`
	}
}
