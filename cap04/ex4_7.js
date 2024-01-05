const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Nº de pessoas? "))
const peixes= Number(prompt("Nº de peixes? "))
let total

if(peixes <= pessoas){
    total = (pessoas * 20)
} else {
    const extra = Math.abs(peixes - pessoas)
    total = (pessoas * 20) + extra * 12
}
console.log(`Total: R$ ${total}`)