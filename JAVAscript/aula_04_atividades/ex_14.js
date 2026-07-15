let amigos =[
    {nomes},
    {idades}
]

amigos.forEach(function(amigo){
    console.log(`${amigo.nomes} ${amigo.idade}`)
})
amigos.nomes = 'Caiã','Davi'
amigos.idades = 15, 15;

console.log(`${amigos.nomes}`)
console.log(`${amigos.idades}`)