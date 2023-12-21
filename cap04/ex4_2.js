const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.nome.value
    const masc = frm.masculino.checked
    const alt = Number(frm.altura.value)



    const peso = masculino.checked? 22*Math.pow(alt, 2) : 21*Math.pow(alt, 2)

    /* let peso   
    if(masculino.checked) {
        peso = 22 * Math.pow(alt, 2)
    } else {
        peso = 21 * Math.pow(alt, 2)
    } */
    
    resposta.innerText = `${nome}, seu peso ideal é: ${peso}Kg`

frm.addEventListener("reset", () => {
    resposta.innerText = ''
})
})