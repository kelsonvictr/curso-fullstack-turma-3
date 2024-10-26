import React from 'react'
import Mensagem from './components/Mensagem'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Renderização Condicional Simples</h1>
      <Mensagem tipo={"sucesso"} />
      <Mensagem tipo={"erro"} />
      <Mensagem tipo={"aviso"} />
    </div>
  )
}

export default App