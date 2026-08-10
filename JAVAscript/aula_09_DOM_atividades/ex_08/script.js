const btn01 = document.querySelector("#btn01")
const btn02 = document.querySelector("#btn02")
const btn03 = document.querySelector("#btn03")
const titulo = document.querySelector("p")

btn01.addEventListener("click", function(){
    titulo.style.color = btn01.style.color
})

btn02.addEventListener("click", function(){
    titulo.style.color = btn02.style.color
})

btn03.addEventListener("click", function(){
    titulo.style.color = btn03.style.color
})