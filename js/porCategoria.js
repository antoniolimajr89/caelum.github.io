fetch(globals.url+"duvida/")
	.then(response => {
		if (response.ok) {
			return response.json()
		}
	})
	.then(lista => {
		console.log(lista)
		lista.forEach(duvida => {
			populaCom(duvida)
		})
	})


function populaCom(duvida) {
	const tplCartao = document.createElement("tpl")

	var categoria
	if (duvida.categoria == "") {
		categoria = "Off Topic"
	} else {
		categoria = duvida.categoria
	}
	var corStatus = coresStatus[duvida.status]

	const cartaoModelo = `
		<div class="card cardCategoria">
			<h2 class="card--titulo" style="color:${duvida.cor}">${categoria}</h2>
			<div class="card--conteudo" style="background-color:${corStatus}">
				<p class="card--qtd">${duvida.quantidade}</p>
				<a class="card--ancora" target="_blank" href=${urlForum(duvida)}>
					<button type="button" class="card--btnCategoria">Fórum</button>
				</a>
				<a class="card--ancora" href="subCategoria.html?categoria=${encodeURIComponent(categoria)}&cor=${encodeURIComponent(duvida.cor)}">
					<button type="button" class="card--btnCategoria">Detalhes</button>
				</a>
			</div>
		</div>
	`

	tplCartao.innerHTML = cartaoModelo

	const $cartao = tplCartao.querySelector(".card")

	document.querySelector(".cardPorCategoria").insertAdjacentElement("beforeend", $cartao)
}


function urlForum (categoria) {
	if(categoria == null || categoria == undefined ||
		categoria.codigo == null || categoria.codigo == undefined || categoria.codigo == "") {
		return "https://cursos.alura.com.br/forum/todos/1"
	} else {
		return `"https://cursos.alura.com.br/forum/categoria-${categoria.codigo}/sem-resposta/"`
	}
}
