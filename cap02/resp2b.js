const frm = document.querySelector("form")
const resultado = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    tarifa = frm.valor.value
    uso =frm.tempo.value

    tempoUso = Math.ceil(uso/15)
    valorFinal=(tempoUso*tarifa).toFixed(2)

    resp.innerText = `Total: R$${valorFinal}`

    e.preventDefault()
})