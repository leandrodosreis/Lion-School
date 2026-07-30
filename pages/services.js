'use strict'

const BASE_URL = 'https://lion-school-phbo.onrender.com'
const CURSOS_URL = `${BASE_URL}/cursos`
const ALUNOS_URL = `${BASE_URL}/alunos`

export async function getCursos() {
    try {
        const response = await fetch(CURSOS_URL)
        if (!response.ok) throw new Error('Erro na requisição')

        const data = await response.json()

        // Se a resposta for direto o Array, retorna 'data'
        // Se a resposta for um objeto com a chave '.cursos', retorna 'data.cursos'
        return Array.isArray(data) ? data : (data.cursos || [])

    } catch (error) {
        return false
    }
}

// Busca todos os alunos de um curso específico (ex: curso_id = 1)
export async function getAlunosPorCurso(cursoId) {
    try {
        const response = await fetch(`${ALUNOS_URL}?curso_id=${cursoId}`)
        const data = await response.json()
        return Array.isArray(data) ? data : (data.alunos || [])

    } catch (error) {
        return false
    }
}

// Busca os detalhes de um único aluno pelo id
export async function getAlunoPorId(id) {
    try {
        const response = await fetch(`${ALUNOS_URL}/${id}`)

        return await response.json()

    } catch (error) {
        return false
    }
}