'use strict'

export async function criarHome(){

    const texto = document.createElement('div')
    texto.className = 'textoInicial'
    texto.textContent = 'Escolha um curso para gerenciar'

    const main = document.getElementById('main')


    const imageEletronic = document.createElement('img')
    imageEletronic.className = 'aparelhos'
    imageEletronic.src = "../img/devices.png"


    const imageWoman = document.createElement('img')
    imageWoman.className = 'woman'
    imageWoman.src = "../img/studant (1).png"
    
    const btnDS = document.createElement('button')
    btnDS.className = 'btnDS'
    btnDS.onclick = () => renderizarPagina('desenvolvimento')

    const btnRedes = document.createElement('button')
    btnRedes.className = 'btnRedes'
    btnRedes.onclick = () => renderizarPagina('desenvolvimento')

    main.append(texto, imageEletronic,imageWoman, btnDS, btnRedes)

    return main
}
