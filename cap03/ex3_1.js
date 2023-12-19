const prompt = require("prompt-sync")()
const num1 = Number(prompt("O 1º numero: "))
const num2 = Number(prompt("O 2º numero: "))
const soma = num1 + num2

console.log(`${num1} + ${num2} = ${soma}`)