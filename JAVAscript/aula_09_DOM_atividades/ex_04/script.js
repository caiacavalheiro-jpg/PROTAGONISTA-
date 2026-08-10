const paragrafos = document.querySelectorAll('p')
const frases = document.querySelector('#listaFrases')
const btn = document.querySelector('button')

btn.addEventListener("click", function(){
    paragrafos.forEach(function(item){
        let li = document.createElement("li")
        li.textContent = item.textContent
        frases.appendChild(li)
    })
})