let  pessoa =[
    nome = 'Caiã',
    idade = '15',
]

for (let chave in pessoa){
    console.log(`${chave} = ${pessoa[chave]}`)
}

for (let chaves in pessoa){
    console.log(`${pessoa[chaves]}`)
}