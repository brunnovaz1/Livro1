const prompt = require("prompt-sync")()
const racao = Number(prompt("Ração disponível (Kg): "))
const consumo = Number(prompt("Consumo diário (g): "))

dias = Math.floor(racao*1000/consumo)
sobra = (racao*1000)%consumo

console.log(`A ração irá durar ${dias} dias e vai sobrar ${sobra}gr`)