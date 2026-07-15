let  pessoa ={
    nome : 'Caiã',
    idade : 15,
    altura : 1.72,
    estudante : true,
}

for (let chave in pessoa){
    console.log(`${chave} = ${pessoa[chave]}`)
}