const frm = document.querySelector("form")   //Hoje e udado o getElementById, pois é mais
const resp = document.querySelector("h3")    //amplo nas chamadas e pros navegadores<2009

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value  // ou const nome = document.querySelector("form").inNome.Value
  resp.innerText = `Olá ${nome}!`
  e.preventDefault()
})

/* A propriedade innerText deve ser usada quando você deseja manipular o conteúdo de um elemento HTML como texto simples. Por exemplo, você pode usá-la para alterar o texto de um elemento de formulário "h3" ou para exibir uma mensagem na tela.(testContent ou outerText)

A propriedade innerHTML deve ser usada quando você deseja manipular o conteúdo de um elemento HTML como código HTML. Por exemplo, você pode usá-la para adicionar ou remover elementos HTML de um elemento ou para alterar a estrutura de um elemento. */