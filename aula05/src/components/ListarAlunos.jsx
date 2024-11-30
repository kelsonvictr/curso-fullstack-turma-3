import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListarAlunos = () => {

    const url = "http://localhost:3000/alunos"

    const [alunos, setAlunos] = useState([])

    //useEffect para fazer o get apenas quando a pagina for carregada
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setAlunos(response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, [])

  return (
    <div>
        {
           alunos.map(aluno => (
            <p key={aluno.id}>{aluno.nome} - {aluno.email} - {aluno.curso}</p>
           )) 
        }
    </div>
  )
}

export default ListarAlunos