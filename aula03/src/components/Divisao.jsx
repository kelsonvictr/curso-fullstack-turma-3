import React from 'react'

const Divisao = ({ num1, num2 }) => {
    const resultado = num1 / num2
  return (
    <div>
        <h1>O resultado de {num1} / {num2} é igual a {resultado.toFixed(2)}</h1>
    </div>
  )
}

export default Divisao