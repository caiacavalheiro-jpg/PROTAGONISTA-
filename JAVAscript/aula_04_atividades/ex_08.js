let carro ={
    ano : 2010,
    cor : 'prata',
    placa : 'xxxxx'
}

console.log (`${carro.ano} - ${carro.cor} - ${carro.placa}`)
delete carro.placa
console.log ('carro' in carro)