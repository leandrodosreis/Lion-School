'use strict'

import { getCursos } from "./services.js"
import { renderizarPagina } from "../router.js"

export async function criarHome() {
    const container = document.createElement('div')
    container.className = 'container-home'

    const texto = document.createElement('h1')
    texto.className = 'textoInicial'
    texto.innerHTML = 'Escolha um <strong>curso</strong> para gerenciar'

    const conteudo = document.createElement('div')
    conteudo.className = 'conteudo-home'

    const ilustracoes = document.createElement('div')
    ilustracoes.className = 'ilustracoes'

    const imageEletronic = document.createElement('img')
    imageEletronic.className = 'aparelhos'
    imageEletronic.src = './img/devices.png'

    const imageWoman = document.createElement('img')
    imageWoman.className = 'woman'
    imageWoman.src = './img/studant.png'

    ilustracoes.append(imageEletronic, imageWoman)

    const containerCursos = document.createElement('div')
    containerCursos.className = 'container-cursos'

    // Busca os cursos da API
    const listaCursos = await getCursos()

    listaCursos.forEach(curso => {
        const cardCurso = document.createElement('button')
        cardCurso.className = 'btnDS'

        if (curso.icon) {
            const icone = document.createElement('img')
            icone.src = curso.icon
            icone.alt = ''
            cardCurso.appendChild(icone)
        }

        const nomeCurso = document.createElement('span')
        nomeCurso.textContent = curso.sigla || curso.nome
        cardCurso.appendChild(nomeCurso)

        // Ao clicar, vai para a página do curso escolhido, levando id e nome
        cardCurso.addEventListener('click', () => {
            renderizarPagina(
                'curso', { 
                id: curso.id, 
                nome: curso.nome }
            )
        })

        containerCursos.appendChild(cardCurso)
    })

    conteudo.append(ilustracoes, containerCursos)
    container.append(texto, conteudo)

    return container
}