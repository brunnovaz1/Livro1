const frm = document.querySelector("form")
const resposta1 = document.querySelector("#resp1")
const resposta2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const lado1 = Number(frm.ladoA.value)
  const lado2 = Number(frm.ladoB.value)
  const lado3 = Number(frm.ladoC.value)

  if(lado1 > (lado2 + lado3) || lado2 > (lado1 + lado3) || lado3 > (lado1 + lado2)) {
    resposta1.innerText = "Lados informados não formam um triângulo!"
    return
  
  let triangulo
  } else if( lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    triangulo = "Escaleno"
  } else if(lado1 == lado2 && lado2 == lado3) {
    triangulo = "Equilátero"
  } else {
    triangulo = "Isóceles"
  }
  resposta1.innerText = `Lados podem formar um triângulo!`
  resposta2.innerText = `Tipo: ${triangulo}`
})