
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

function iniciarJogo() {
			var nivel = document.getElementById('nivel').value
			
			if(nivel === ""){
				alert('Selecione um nível para iniciar o jogo')
				return false
			}

			window.location.href = 'jogo.html?' + nivel
	}

if(nivel === 'normal'){
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000
} else if(nivel === 'chuk_norris'){
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalco(){
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalco()

var cronometro = setInterval(function(){

	tempo -=1

	if(tempo <= 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica(){
	//remover mosquito anterior caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas>3){
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
		vidas++
		}
		
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura)- 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}


function tamanhoRandomico(){
	classe = Math.floor(Math.random() * 3)

	switch(classe){
	case 0:
		return 'mosquito0'
	case 1:
		return 'mosquito1'
	case 2: 
		return'mosquito2'
	}
}


function ladoRandomico(){
	lado = Math.floor(Math.random() * 2)

		switch(lado){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		}
	}


