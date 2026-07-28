'use strict'

const BASE_URL = 'https://lion-school-phbo.onrender.com/cursos'

export async function getCursos() {
    try {
        const response = await fetch(BASE_URL)
        if (!response.ok) throw new Error('Erro na requisição')
        
        const data = await response.json()
        
        // Veja no Console do navegador o que a API realmente respondeu:
        console.log('Resposta da API:', data) 

        // Se a resposta for direto o Array, retorna 'data'
        // Se a resposta for um objeto com a chave '.cursos', retorna 'data.cursos'
        return Array.isArray(data) ? data : (data.cursos || [])

    } catch (error) {
        console.error('Erro ao buscar cursos:', error)
        // Retornar um array vazio evita o crash do .forEach no home.js!
        return [] 
    }
}