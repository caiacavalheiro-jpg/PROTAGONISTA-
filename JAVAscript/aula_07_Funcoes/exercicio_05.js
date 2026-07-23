function verificarIdade(idade){
    if(idade < 12){
        return 'Criança'
    }
    else if(idade < 18){
        return 'Adolecente'
    }
    else if(idade < 65){
        return 'Adulto'
    }
    else {
        return 'Idoso'
    }
}

let idades = [
    12, 15, 18, 56, 67
]
idades.forEach(function(item){
    console.log(verificarIdade(item))
})