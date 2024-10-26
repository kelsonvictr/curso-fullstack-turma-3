const mediaParaAprovacao = 7.0

const notas = [7.5, 6.0, 7.1]
const media = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(1)

var statusAprovacao;

if (media < mediaParaAprovacao) {
    statusAprovacao = "REPROVADO"  
} else {
    statusAprovacao = "APROVADO"
}

console.log(`Nota1: ${notas[0]}`)
console.log(`Nota2: ${notas[1]}`)
console.log(`Nota3: ${notas[2]}`)
console.log(`Média: ${media}`)
console.log(`Status Aprovação: ${statusAprovacao}`)