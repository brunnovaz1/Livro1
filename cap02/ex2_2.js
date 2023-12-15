const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const filme = frm.titulo.value
    const duracao = frm.tempo.value

    horas = Math.floor(duracao/60) //Arredonda para baixo expondo apenas a parte ineira
    min = duracao % 60


    resp1.innerText = filme
    resp2.innerText = `${horas} horas e ${min} minutos.`
    e.preventDefault()
})