import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState()
    const [numerosSorteados, setNumerosSorteados] = useState([])

    function sortearNumero() { 
        if (numerosSorteados.length < 6) {
            let sorteado = Math.floor(Math.random() * 60) + 1
            setNumeroSorteado(sorteado)
            setNumerosSorteados([...numerosSorteados, sorteado])
        } else {
            alert("Já temos 6 números sorteados")
        }
    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :)</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Último número sorteado: {numeroSorteado}</h1>
        <h1>Sorteados: {numerosSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookMegaSena