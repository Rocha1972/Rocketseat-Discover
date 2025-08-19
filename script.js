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
      "Foto de Renato Rocha, usando camiseta preta em fundo claro desfocado"
    )
  } else {
    //set sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/rocker.png")
    img.setAttribute(
      "alt",
      "Foto de Renato Rocha, usando camiseta branca e moleton preto em fundo escuro"
    )
  }
}
