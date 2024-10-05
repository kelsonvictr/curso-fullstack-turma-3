const notas = [8.0, 9.0, 10.0]

console.log(`A primeira nota é: ${notas[0].toFixed(1)}`)
console.log(`A segunda nota é: ${notas[1].toFixed(1)}`)
console.log(`A terceira nota é: ${notas[2].toFixed(1)}`)

var media = (notas[0]+notas[1]+notas[2])/notas.length

console.log(`A média foi de: ${media.toFixed(1)}`)