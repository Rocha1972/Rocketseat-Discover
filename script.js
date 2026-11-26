function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicione a imagem light
    img.setAttribute("src", "./assets/rocker-claro.png")
    img.setAttribute("alt", "Foto de Renato Rocha, em fundo claro")
  } else {
    //set sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/rocker-escuro.png")
    img.setAttribute("alt", "Foto de Renato Rocha, em fundo escuro")
  }
}
