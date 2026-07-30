'use strict'

import { getAlunoPorId } from "./services.js"

export async function criarAluno(dados) {
    const { id } = dados

    const container = document.createElement('div')
    container.className = 'container-aluno'

    const aluno = await getAlunoPorId(id)

    const cardFoto = document.createElement('div')
    cardFoto.className = 'card-foto-aluno'

    const foto = document.createElement('img')
    foto.src = aluno.foto 
    foto.alt = aluno.nome 

    const nome = document.createElement('p')
    nome.className = 'nome-aluno'
    nome.textContent = aluno.nome 

    cardFoto.append(foto, nome)
    container.appendChild(cardFoto)

    return container
}