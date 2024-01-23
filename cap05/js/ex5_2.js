const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.numero.value)
    let resposta = ""

    for ( let i = num; i > 1; i--) {
        resposta = resposta  + i + ", ";

        if((num - i +1) % 10 === 0){        //Quando i é 10, num - i + 1 é:  10 - 10 + 1 = 1(uma resposta)
            resposta = resposta + "\n";
        }
    }

    resp.innerText = resposta + "1."
})