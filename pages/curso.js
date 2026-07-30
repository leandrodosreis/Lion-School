'use strict'

import { getAlunosPorCurso } from "./services.js"
import { renderizarPagina } from "../router.js"

export async function criarCurso(dados) {
    const { id: cursoId, nome: cursoNome } = dados

    const container = document.createElement('div')
    container.className = 'container-desenvolvimento'

    // Barra superior: filtro de status (esquerda) + legenda (direita)
    const barraStatus = document.createElement('div')
    barraStatus.className = 'barra-status'

    const selectStatus = document.createElement('select')
    selectStatus.className = 'select-status'
    selectStatus.innerHTML = `
        <option value="todos">Status</option>
        <option value="cursando">Cursando</option>
        <option value="finalizado">Finalizado</option>
    `

    const legenda = document.createElement('div')
    legenda.className = 'legenda'
    legenda.innerHTML = `
        <span class="legenda-titulo">LEGENDA</span>
        <span class="legenda-item"><span class="bolinha cursando"></span>Cursando</span>
        <span class="legenda-item"><span class="bolinha finalizado"></span>Finalizado</span>
    `

    barraStatus.append(selectStatus, legenda)

    const titulo = document.createElement('h1')
    titulo.className = 'titulo-curso'
    titulo.textContent = cursoNome

    const gridAlunos = document.createElement('div')
    gridAlunos.className = 'grid-alunos'

    // Busca todos os alunos do curso uma única vez
    const listaAlunos = await getAlunosPorCurso(cursoId)

    function renderizarAlunos(filtroStatus) {
        gridAlunos.replaceChildren()

        const alunosFiltrados = filtroStatus === 'todos'
            ? listaAlunos
            : listaAlunos.filter(aluno => aluno.status === filtroStatus)

        alunosFiltrados.forEach(aluno => {
            const cardAluno = document.createElement('button')
            cardAluno.className = `card-aluno ${aluno.status}`

            const foto = document.createElement('img')
            foto.src = aluno.foto
            foto.alt = aluno.nome

            const nome = document.createElement('p')
            nome.textContent = aluno.nome

            cardAluno.append(foto, nome)

            // Ao clicar em um aluno, vai para a página de detalhes dele
            cardAluno.addEventListener('click', () => {
                renderizarPagina('aluno', { id: aluno.id })
            })

            gridAlunos.appendChild(cardAluno)
        })
    }

    renderizarAlunos('todos')

    selectStatus.addEventListener('change', (evento) => {
        renderizarAlunos(evento.target.value)
    })

    container.append(barraStatus, titulo, gridAlunos)

    return container
}