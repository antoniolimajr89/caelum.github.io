fetch("https://dash-forum.herokuapp.com/duvidas")
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
	const tplCartao = document.createElement('tpl')

	var categoria
	if (duvida.categoria == "") {
		categoria = "Off Topic"
	} else {
		categoria = duvida.categoria
	}

	const cartaoModelo = `
		<div class="card cardCategoria">
			<a href="subCategoria.html?categoria=${encodeURIComponent(categoria)}&cor=${encodeURIComponent(duvida.cor)}">
				<h2 style="color:${duvida.cor}">${categoria}</h2>
				<p class="${duvida.status}">${duvida.duvidas}</p>
			</a>
		</div>
	`

	tplCartao.innerHTML = cartaoModelo

	const $cartao = tplCartao.querySelector('.card')

	document.querySelector('button').insertAdjacentElement('beforebegin', $cartao)
}
