'use strict'

export async function criarHome(){

    const texto = document.createElement('div')
    texto.className = 'textoInicial'
    texto.textContent = 'Escolha um curso para gerenciar'

    return texto
}
