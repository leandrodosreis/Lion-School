'use strict'

import { getCursos } from "./services.js"

export async function criarHome() {
    const container = document.createElement('div')
    container.className = 'container-home'

    const texto = document.createElement('h1')
    texto.className = 'textoInicial'
    texto.textContent = 'Escolha um curso para gerenciar'

    const imageEletronic = document.createElement('img')
    imageEletronic.className = 'aparelhos'
    imageEletronic.src = './img/devices.png'

    const imageWoman = document.createElement('img')
    imageWoman.className = 'woman'
    imageWoman.src = './img/studant.png'

    const containerCursos = document.createElement('div')
    containerCursos.className = 'container-cursos'

    // Busca os cursos da API
    const listaCursos = await getCursos()

    listaCursos.forEach(curso => {
        const cardCurso = document.createElement('button')
        cardCurso.className = 'btnDS'
        cardCurso.textContent = curso.icon || curso.nome

        containerCursos.appendChild(cardCurso)
    })

    container.append(texto, imageEletronic, imageWoman, containerCursos)

    return container
}