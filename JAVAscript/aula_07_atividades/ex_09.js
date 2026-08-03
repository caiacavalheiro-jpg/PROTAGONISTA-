function verificarIdade(idade){
    if(idade < 18){
        return 'Menor de idade'
    }
    else {
        return 'Maior de idade'
}}

let idades = [
    15, 18, 25
]
idades.forEach(function(item){
    console.log(verificarIdade(item))
})