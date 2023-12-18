const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    const kg = Number(frm.quilo.value)
    const consumido = Number(frm.consumo.value)

   const conta = (kg/1000) * consumido

    resp.innerText = `Valor a pagar: R$${conta}`
    e.preventDefault()
})