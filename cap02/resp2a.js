const frm = document.querySelector("form")
const r1 = document.querySelector("resp1")
const r2 = document.querySelector("resp2")

frm.addEventListener("submit", (e)=> {
    const remedio = frm.medicamento.value
    const preco = Number(frm.valor.value)
    const  desc = Math.floor(2*preco).toFixed(2)

    resp1.innerText = `Promoção de ${remedio}` 
    resp2.innerText = `Leve 2 por apenas: R$${desc}`

    e.preventDefault()
})