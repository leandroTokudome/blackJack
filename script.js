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
}

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 13; j++) {
        for (var k = 0; k < 4; k++) {
            deck.push(`${cartas[j]}${naipes[k]}`)
            valorDeck.push(valorCartas[j])
        }
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