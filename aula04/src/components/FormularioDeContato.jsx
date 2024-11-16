import React from 'react'
import { useState } from 'react'

const FormularioDeContato = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const dadosDoForm = {
            nome: nome,
            email: email,
            mensagem: mensagem
        }

        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)

        console.log(`O seguinte JSON será enviato via HTTP POST para o backend: ${jsonParaEnviarParaOBack}`)

    }

  return (
    <div>
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
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default FormularioDeContato