import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizarArtigo = () => {

    const { id } = useParams()
    const [artigo, setArtigo] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/artigos/${id}`)
        .then(response => setArtigo(response.data))
        .catch(error => console.error("Erro ao carregar o artigo: ", error))
    }, [id])

    return (
        <div>
            <h2>{artigo.titulo}</h2>
            <p>{artigo.conteudo}</p>
        </div>
    )
}

export default VisualizarArtigo