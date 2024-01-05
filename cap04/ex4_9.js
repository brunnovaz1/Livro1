const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite um número entre 100 e 999: "))
if(numero < 100 || numero > 999){
  console.log("Número inválido!")
  return
}
const n1 = Math.floor(numero / 100)
const resto = numero % 100
const n2 = Math.floor(resto / 10)
const n3 = resto % 10

console.log(`Número invertido: ${n3}${n2}${n1}`)