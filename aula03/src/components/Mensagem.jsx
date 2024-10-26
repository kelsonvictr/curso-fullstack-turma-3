import React from 'react'

const Mensagem = ({ tipo }) => {

    const renderizarMensagem = () => {
        if (tipo === "sucesso") {
            return <h1>Operação realizada com sucesso</h1>
        } else if (tipo === "erro") {
            return <h2>Ocorreu um erro na operação</h2>
        } else if (tipo === "aviso") {
            return <h3>Atenção! Verifique os dados.</h3>
        } else {
            return null
        }
    }

  return (
    <div className="mensagem">
        {renderizarMensagem()}
    </div>
  )
}

export default Mensagem