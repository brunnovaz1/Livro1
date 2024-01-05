const frm  = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = Number(frm.numero.value)
  //const resposta = num % 2 == 0 ? "É par!" : "É impar!"
  const resposta = num % 2 ? "É impar!" : "É par!"
  
  resp.innerText = `${num} é ${resposta}`
})