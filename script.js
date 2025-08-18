function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicione a imagem light
    img.setAttribute("src", "./assets/rocker-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brit usando óculos escuro, sorrindo, com jaqueta preta em fundo degrade, roxo e azul"
    )
  } else {
    //set sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/rocker.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito usando óculos, sorrindo, com camisa preta em fundo amarelo"
    )
  }
}
