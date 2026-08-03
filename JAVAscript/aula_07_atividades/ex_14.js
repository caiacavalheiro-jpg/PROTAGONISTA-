let mensagem = "Global";
function testarEscopo(){
    let mensagem = 'Casa do IgorzFrank' 
    console.log(mensagem)
}
testarEscopo();
console.log(mensagem)