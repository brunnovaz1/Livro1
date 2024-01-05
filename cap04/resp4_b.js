const frm =  document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
  e.preventDefault()
  const velVia  = frm.permitida.value
  const velCond = frm.condutor.value 

  if(velCond <= velVia) {
    resp.innerText = "Sem multa!"
  } else if(velCond <= 1.2 * velVia) {
    resp.innerText = "Multa Leve!!"
  } else {
    resp.innerText = "Multa grave!!!"
  }

})