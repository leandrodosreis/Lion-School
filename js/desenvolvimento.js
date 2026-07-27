export async function criarDesenvolvimento(){

    const texto = document.createElement('div')
    texto.className = 'textoInicial'
    texto.textContent = 'Escolha um curso para gerenciar'

    const main = document.getElementById('main')


    const imageEletronic = document.createElement('img')
    imageEletronic.className = 'aparelhos'
    imageEletronic.src = "../img/devices.png"


    main.append(texto, imageEletronic)

    return main
}