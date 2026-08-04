let numeros = [5, 12, 8, 21, 3, 15, 7]
let numerosPares = numeros.filter(function(item){
    return item % 2 == 0
})
console.log('Esses são os numeros Pares:',numerosPares)