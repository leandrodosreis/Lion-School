'use strict'

import { renderizarPagina, voltarPagina } from "./router.js"

// Clique no header: se estiver em qualquer página que não seja a Home, volta;
// se estiver na Home, é a ação de "Sair" (ajuste aqui a lógica de logout, se houver)
document.querySelector('.divheader').addEventListener('click', () => {
    const textoAtual = document.querySelector('.divheader span').textContent

    if (textoAtual === 'Voltar') {
        voltarPagina()
    } else {
        // Ação de logout / redirecionamento para tela de login, se existir
        console.log('Sair do sistema')
    }
})

// Página inicial
renderizarPagina('home')