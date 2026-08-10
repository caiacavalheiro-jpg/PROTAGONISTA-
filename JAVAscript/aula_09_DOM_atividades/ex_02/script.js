const paragrafo = document.querySelector("#importante")
const btn = document.querySelector("button")
const resultado = document.querySelector("#destaque")

btn.addEventListener("click", function(){
    resultado.textContent = paragrafo.textContent
})