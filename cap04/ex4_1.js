const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")
const resp3 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
const name = frm.nome.value
const n1 = Number(frm.nota1.value)
const n2 = Number(frm.nota2.value)

calc= ((n1+n2)/2).toFixed(1)
media.innerText = `Media de Notas: ${calc}`

if(calc >= 7) {
  resultado.innerText = `Parabéns ${name}, você foi APROVADO!`
  resultado.style.color = "green";
} else if(calc >= 5) {
  resultado.innerText = `${name}, você fará P3`;
  resultado.style.color = "orange"

 const inputP3 = document.createElement("input")
 inputP3.placeholder = "Nota p3";
 inputP3.id = "p3"

  const p3Container = document.getElementById("p3-container")
  p3Container.innerHTML = ''
  p3Container.appendChild(inputP3)

} else {
  resultado.innerText = `${name}, você esta REPROVADO!`
  resultado.style.color = "red"
}
e.preventDefault()
})