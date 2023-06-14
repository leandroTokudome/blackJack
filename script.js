var cartas = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `Ás`]
var valorCartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
var naipes = [` de Paus`, ` de Ouros`, ` de Espadas`, ` de Copas`]

var deck = []
var valorDeck = []

var cartaSorteada
var valorSorteado

function mostrarInput() {
    if (modoJogo.value == `competitivo`) {
        meta.style.display = `block`
    } else {
        meta.style.display = `none`
    }

    if (apostaAutomatica.value == `ativadoAutomatico`) {
        fichasAutomaticoDiv.style.display = `block`
    } else {
        fichasAutomaticoDiv.style.display = `none`
    }
}

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 13; j++) {
        for (var k = 0; k < 4; k++) {
            deck.push(`${cartas[j]}${naipes[k]}`)
            valorDeck.push(valorCartas[j])
        }
    }
}

function carregarJogadores(numeroJogadoresParam) {
    let mesaJogador = document.getElementById(`mesa`)
    for (var i = 1; i <= numeroJogadoresParam; i++) {
        let jogadores = document.createElement(`div`)
        jogadores.id = `jogador${i}`
        let maoJogadores = document.createElement(`div`)
        maoJogadores.id = `maoJogador${i}`
        let pontosJogadores = document.createElement(`div`)
        pontosJogadores.id = `pontosJogador${i}`
        let fichasJogadores = document.createElement(`div`)
        fichasJogadores.id = `fichasJogador${i}`
        let acoesJogadores = document.createElement(`div`)
        acoesJogadores.className = `acoes`
        let hitButton = document.createElement(`button`)
        hitButton.onclick = ``
        hitButton.innerHTML = `Hit`
        let standButton = document.createElement(`button`)
        standButton.onclick = ``
        standButton.innerHTML = `Stand`
        jogadores.appendChild(maoJogadores)
        jogadores.appendChild(pontosJogadores)
        jogadores.appendChild(fichasJogadores)
        acoesJogadores.appendChild(hitButton)
        acoesJogadores.appendChild(standButton)
        jogadores.appendChild(acoesJogadores)
        mesaJogador.appendChild(jogadores)
    }
}

function iniciar(numeroJogadoresParam, fichasInicialParam) {
    carregarJogadores(numeroJogadoresParam)
    jogo.style.display = `block`
    for (var i = 1; i <= numeroJogadoresParam; i++) {
        let fichasJogador = document.getElementById(`fichasJogador${i}`)
        fichasJogador.innerHTML = fichasInicialParam
    }
}

function sortear() {
    var numeroSorteado = Math.floor(Math.random() * 416)
    if (cartaSorteada[numeroSorteado] == undefined) {
        sortear()
    } else {
        cartaSorteada = deck[numeroSorteado]
        valorSorteado = valorDeck[numeroSorteado]
        delete deck[numeroSorteado]
        delete valorDeck[numeroSorteado]
    }
}