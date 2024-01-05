frm =  document.querySelector("form")
resp = document.querySelector("#tempo")
troco = document.querySelector("#troco")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
 const deposito = Number(frm.valor.value)

 if(deposito < 1) {
  resp.innerText = "Valor insuficiente!"


 } else if( deposito == 1){
  resp.innerText = "Tempo: 30 minutos"
  return

} else if (deposito > 1 && deposito < 1.75) {
  resp.innerText = "Tempo: 30 minutos"
  let diferenca = Math.abs(deposito - 1).toFixed(2)
  troco.innerText = `Troco:R$${diferenca}`
  return

} else if( deposito == 1.75){
  resp.innerText = "Tempo: 60 minutos"
  return

 } else if (deposito > 1.75 && deposito < 3) {
  diferenca = Math.abs(deposito - 1.75).toFixed(2)
  resp.innerText = `Tempo: 60 minutos`
  troco.innerText = `Troco: R$${diferenca}`
  return

 } else {
  diferenca = Math.abs(3 - deposito).toFixed(2)
  resp.innerText = 'Tempo: 120 minutos'
  if(diferenca != 0) {
  troco.innerText = `Troco: R$${diferenca}`
 }
 }

})