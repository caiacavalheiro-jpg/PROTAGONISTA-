const titulo = document.querySelector(".titulo")
const btn01 = document.querySelector(".btn01")
const resultado = document.querySelector(".resultado")

btn01.addEventListener("click", function(){
    resultado.textContent = titulo.textContent
})