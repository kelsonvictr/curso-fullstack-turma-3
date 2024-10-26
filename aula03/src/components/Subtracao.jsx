import React from 'react'

const Subtracao = ({ num1, num2 }) => {
    const resultado = num1 - num2
  return (
    <div>
        O resultado de {num1} - {num2} é igual a {resultado}
    </div>
  )
}

export default Subtracao