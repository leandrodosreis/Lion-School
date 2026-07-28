'use strict'

import { criarDesenvolvimento } from "./pages/desenvolvimento.js"
import { criarHome } from "./pages/home.js"

const paginas = {
    home: {
        renderizar: criarHome
    }, 
    desenvolvimento: {
        renderizar: criarDesenvolvimento
    }
}

export async function renderizarPagina(nomePagina, dados = null) {
    const paginaConfig = paginas[nomePagina] 

    const conteudo = await paginaConfig.renderizar(dados)
    document.getElementById('main').replaceChildren(conteudo)
}

// Página inicial
renderizarPagina('home')