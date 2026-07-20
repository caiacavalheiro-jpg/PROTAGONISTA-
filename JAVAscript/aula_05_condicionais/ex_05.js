let num1 = 20;
let num2 = 10;
let operador = '/';

switch(operador){
    case '+':
    console.log(num1 + num2)
    break;
    case '-':
    console.log(num1 - num2)
    break;
    case '*':
    console.log(num1 * num2)
    break;
    case '/':
    if (num2 === 0){
        console.log(`O numero não tem divisão`)
    }
    else {
        console.log(num1 / num2)
    }
    break;
    default:
        console.log('Erro404')
}