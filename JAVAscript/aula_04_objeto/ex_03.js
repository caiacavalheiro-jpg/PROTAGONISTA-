let celular = {
    marca : 'nokia',
    modelo : 'nokia tijolão',
    ano : '1994',
    cor : 'branco',
}

console.log(celular.marca)
console.log(celular.modelo)
console.log(celular.ano)
console.log(celular.cor)

for (let chave in celular){
    console.log(` ${chave} = ${celular[chave]}`)
}