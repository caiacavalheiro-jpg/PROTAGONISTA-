let carro = {
    marca: "fiat",
    modelo: "uno",
    ano: 2010,
};
console.log (carro["marca"])

// OU TEM ESSE JEITO TAMBEM

let carroo = {
    marca: "fiat",
    modelo: "uno",
    ano: 2010,
};

console.log (carroo.marca)

//OUTRO EXEMPLO

let aluno = {
    nome: 'Caiã',
    matricula: 282867,
};
for (let chave in aluno){
    console.log (`${chave}: ${aluno[chave]}`)
}
//OUTROS JEITOS
let carros = [
{marca: 'fiat', modelo: '500'},
{marca: 'mercedes', modelo: 'c300'},
{marca: 'citroen', modelo: 'C4'}]

carros.forEach (function(carros){
    console.log (`Marca: ${carros.marca} - Modelo: ${carros.modelo}`)
    Objects.key(carros)
})