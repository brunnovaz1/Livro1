const frm  = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.numero.value)
    let resposta = ""
    
    for (let i = 0; i <= 10; i++) {
        resposta = resposta + num + " x " + i + " = " + (num * i) + "\n"   //"resposta + " é necessário para que a resposta de cada loop seja exibida e nao substituida pela atual
    }
    resp.innerText = resposta
})