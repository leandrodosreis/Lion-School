'use strict'

import { criarHome } from "./js/home.js"

const paginas = {
    home: {
        titulo: '',
        renderizar: criarHome,
        mostrarHeader: false
    }
}

export async function renderizarPagina(nomePagina, dados = null) {
    const paginaConfig = paginas[nomePagina] 

    const conteudo = await paginaConfig.renderizar(dados)
    document.getElementById('main').replaceChildren(conteudo)
}

// Página inicial
renderizarPagina('home')