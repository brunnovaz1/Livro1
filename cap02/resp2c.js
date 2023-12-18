const frm = document.querySelector("form")
const r1 = document.querySelector("promocao")
const r2 = document.querySelector("terceiro")

frm.addEventListener("submit", (e) => {
    prod = frm.produto.value
    unid = frm.preco.value
    valor=(unid*2 + 0.5*unid).toFixed(2)

    promocao.innerText = `${prod} - Promoção: Leve 3 por: R$${valor}`
    terceiro.innerText = `O 3º produto custa apenas: R$${(0.5*unid).toFixed(2)}` 
    e.preventDefault()
})