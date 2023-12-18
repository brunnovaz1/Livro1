const frm = document.querySelector("form")
const r1 = document.querySelector("resp1")
const r2 = document.querySelector("resp2")
const r3 = document.querySelector("resp3")


frm.addEventListener("submit", (e) => {
    const promocao = frm.veiculo.value
    const valor = frm.preco.value

    entrada = valor/2
    parcelas = entrada/12

    resp1.innerText = `Promoção: ${promocao}`
    resp2.innerText = `Entrada de: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de ${parcelas.toFixed(2)}` 
    e.preventDefault()
})