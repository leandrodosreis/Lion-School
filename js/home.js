'use strict'

export async function criarHome(){

    const texto = document.createElement('div')
    texto.className = 'textoInicial'
    texto.textContent = 'Escolha um curso para gerenciar'

    const image = document.createElement('img')
    image.className = 'aparelhos'
    image.src = "../img/devices.png"
    document.main.appendChild(image)

    return texto
}
