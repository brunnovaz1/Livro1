const frm  = document.querySelector("form")
const n100 = document.querySelector("resp1")
const n50  = document.querySelector("resp2")
const n10  = document.querySelector("resp3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  resp1.innerText = "";
  resp2.innerText = "";
  resp3.innerText = "";
  
  const saque = Math.floor(Number(frm.valor.value))
  if(saque % 10 != 0){
    alert("Valor indisponível, operando apenas com notas de $100 $50 e $10")
    frm.valor.focus()
  return                 //encerra a execucao do programa para que o codigo abaixo não seja executado (o "alert" ja faz isso, mas e uma boa prática.)
  }
  const n100 = Math.floor(saque/100)
  let resto = saque % 100
  const n50 = Math.floor(resto/50)
  resto = resto % 50
  const n10 = Math.floor(resto/10)
  

  if(n100 > 0){
    resp1.innerText = `Notas $100: ${n100}`
  }
  if(n50 > 0){
    resp2.innerText = `Notas $50: ${n50}`
  }
  if(n10 > 0){
    resp3.innerText = `Notas $10: ${n10}`
  }
})