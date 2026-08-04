 let frutas = ['maçã', 'banana', 'laranja', 'uva']
 let frutas2 = frutas.find(function(item){
    return item.startsWith('l')
 })
 console.log(frutas2)