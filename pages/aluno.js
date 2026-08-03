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

    // Card do gráfico
    const cardGrafico = document.createElement('div')
    cardGrafico.className = 'card-grafico'

    const desempenho = aluno.desempenho

    desempenho.forEach(item => {
        const materia = item.categoria
        const valor = item.valor

        // Classe de cor da barra conforme a nota
        const cor = valor < 50 ? 'vermelho' : valor < 70 ? 'amarelo' : 'azul'

        const grupo = document.createElement('div')
        grupo.className = 'barra-grupo'

        const textoValor = document.createElement('span')
        textoValor.className = `barra-valor texto-${cor}`
        textoValor.textContent = valor

        const trilho = document.createElement('div')
        trilho.className = 'barra-trilho'

        const barra = document.createElement('div')
        barra.className = `barra-preenchida fundo-${cor}`
        barra.style.height = `${valor}%`

        trilho.appendChild(barra)

        const textoMateria = document.createElement('span')
        textoMateria.className = `barra-label texto-${cor}`
        textoMateria.textContent = materia

        grupo.append(textoValor, trilho, textoMateria)
        cardGrafico.appendChild(grupo)
    })

    container.appendChild(cardGrafico)

    return container
}