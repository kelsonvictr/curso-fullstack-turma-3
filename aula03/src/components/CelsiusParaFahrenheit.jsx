import React from 'react'

const CelsiusParaFahrenheit = ({ celsius }) => {
    const fahrenheit = (celsius * 9/5) + 32

  return (
    <div>
        <p>{celsius}° C é o mesmo que {fahrenheit.toFixed(2)} F</p>
    </div>
  )
}

export default CelsiusParaFahrenheit