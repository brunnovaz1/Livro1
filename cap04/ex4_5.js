frm  = document.querySelector("form")
resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = frm.numero.value
  let raiz = Math.sqrt(num)

  if (Number.isInteger(raiz)) {
    resp.innerText = `A raiz quadrada de ${num} é: ${raiz}`
  } else {
    resp.innerText = 'O número nao possui raiz quadrada exata!'
    resp.style.color = "red"
  }
})