import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AdicionarAluno = () => {

    const url = "http://localhost:3000/alunos"

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")


    const enviarParaOBackend = async (dadosDoForm) => {
        const response = await axios.post(url, dadosDoForm)
        console.log("Aluno cadastrado com sucesso!")
        alert("Aluno cadastrado com sucesso!") 
    }

    const handleSubmit = (event) => {
        event.preventDefault() // Não deixa recarregar a página

        const dadosDoForm = {
            nome: nome, //pegando os valores dos useStates
            email: email, //pegando os valores dos useStates
            curso: curso //pegando os valores dos useStates
        }

        // vamos transformar em JSON antes de enviar para o back
        // não vamos precisar mais disso, porque o axios vai converter
        //const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)

        enviarParaOBackend(dadosDoForm)
    
    }

  return (
    <div>
        <h1>Cadastro de Alunos</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="curso">Curso:</label>
                <input
                    type="text"
                    id="curso"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
        
    </div>
  )
}

export default AdicionarAluno