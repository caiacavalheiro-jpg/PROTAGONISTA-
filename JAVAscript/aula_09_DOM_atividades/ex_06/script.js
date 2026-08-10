const title = document.querySelector("h1")
const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    title.textContent = "Título Modificado com Sucesso!"
})