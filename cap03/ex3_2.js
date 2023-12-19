const prompt = require("prompt-sync")()
const veiculo = prompt("Veiculo: ")
const preco = Number(prompt("Preço R$: "))
const entrada = preco/2
const parcelas = entrada/12
console.log(`Valor ${veiculo}`)
console.log(`Entrada de ${entrada}`)
console.log(`12x de ${parcelas}`)