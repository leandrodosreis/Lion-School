'use strict'

import { criarHome } from "./pages/home.js"
import { criarCurso } from "./pages/curso.js"
import { criarAluno } from "./pages/aluno.js"

const paginas = {
    home: {
        renderizar: criarHome
    },
    curso: {
        renderizar: criarCurso
    },
    aluno: {
        renderizar: criarAluno
    }
}

// Guarda a página atual e o histórico de navegação (usado pelo botão "Voltar")
let paginaAtual = null
let historico = []

export async function renderizarPagina(nomePagina, dados = null, voltando = false) {
    const paginaConfig = paginas[nomePagina]

    paginaAtual = { nomePagina, dados }

    const conteudo = await paginaConfig.renderizar(dados)
    document.getElementById('main').replaceChildren(conteudo)

    atualizarHeader(nomePagina)
}

export function voltarPagina() {
    const anterior = historico.pop()

    if (anterior) {
        renderizarPagina(anterior.nomePagina, anterior.dados, true)
    } else {
        renderizarPagina('home', null, true)
    }
}

function atualizarHeader(nomePagina) {
    const spanHeader = document.querySelector('.divheader span')
    if (!spanHeader) return

    spanHeader.textContent = nomePagina === 'home' ? 'Sair' : 'Voltar'
}