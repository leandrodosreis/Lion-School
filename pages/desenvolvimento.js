'use strict'

export async function criarDesenvolvimento() {
    const container = document.createElement('div')
    container.className = 'container-desenvolvimento'

    const titulo = document.createElement('h1')
    titulo.className = 'titulo-curso'
    titulo.textContent = 'Desenvolvimento de Sistemas'

    container.appendChild(titulo)

    return container
}