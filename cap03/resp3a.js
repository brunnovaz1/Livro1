const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário atual: R$"))
const tempo = Number(prompt("Tempo de serviço: "))

aumento = Math.floor(tempo/4)
novoSalario = salario + salario*(aumento/100)

console.log(`Quadriênios: ${aumento}`)
console.log(`Novo Salário: R$${novoSalario.toFixed(2)}`)