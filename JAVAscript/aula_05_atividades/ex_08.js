let valorCompra = 210;

if (valorCompra > 500){
    console.log(valorCompra*0.20)
}
else if(valorCompra>200){
    console.log(valorCompra*0.10)
}
else if(valorCompra>100){
    console.log(valorCompra*0.05)
}
else {
    console.log('Você não possui desconto')
}