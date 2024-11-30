import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Artigos = () => {

    const [artigos, setArtigos] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/artigos")
        .then(response => setArtigos(response.data))
        .catch(error => console.error("Erro ao carregar os artigos: ", error))
    }, [])

    return (
        <div>
            <h1>Artigos de Tecnologia</h1>
            {
                artigos.map(artigo => (
                    <div key={artigo.id}>
                        <a href={`/visualizar-artigo/${artigo.id}`}>
                            <h2>{artigo.titulo}</h2>
                        </a>
                        <p>{artigo.resumo}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Artigos