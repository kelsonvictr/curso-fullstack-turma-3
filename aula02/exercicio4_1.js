const aluno = {
    nome: "Maria",
    cpf: "123.123.123-12",
    cidade: "São Paulo",
    notas: [8.5, 7.2, 9.0, 6.8]
}

console.log(`Nome: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)
console.log(`Cidade: ${aluno.cidade}`)

console.log(`Nota 1: ${aluno.notas[0]}`)
console.log(`Nota 2: ${aluno.notas[1]}`)
console.log(`Nota 3: ${aluno.notas[2]}`)
console.log(`Nota 4: ${aluno.notas[3]}`)

const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/aluno.notas.length

console.log(`A média é: ${media.toFixed(1)}`)

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];

const notaConvertida = notaAleatoria * 10

console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para a escala de 0-100 é: ${notaConvertida}`)