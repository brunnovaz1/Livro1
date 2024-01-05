const prompt = require("prompt-sync")()
const total = Number(prompt("Valor total: R$"))
const aux = Math.floor(Number(total / 20))
/*let parcelas
 if(aux < 1){
  parcelas = 1
} else if(aux > 6) {
  parcelas = 6
} else {
  parcelas = aux
} */
const parcelas = aux < 1 ? 1 : aux > 6 ? 6 : aux
let valorParcela = Number(total / parcelas)
console.log(`No cartão de crédito em até ${parcelas}x no valor de R$${(valorParcela).toFixed(2)}`)
