const temperaturasC = [25, 30, 15, 20]

console.log(`As temperaturas armezanadas são: ${temperaturasC}`)

const temperaturaAleatoria = temperaturasC[Math.floor(Math.random() * temperaturasC.length)]

const temperaturaF = (temperaturaAleatoria * 9/5) + 32

console.log(`A temperatura sorteada ${temperaturaAleatoria}°C, que corresponde a ${temperaturaF}°F`)