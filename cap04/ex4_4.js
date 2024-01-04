frm = document.querySelector("form")
resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const horaBra = Number(frm.hora.value)
  
  let horaFra = horaBra + 5

  if(horaFra > 24) {
    horaFra = horaFra - 24
  }

  resp.innerText = horaFra.toFixed(2)


})