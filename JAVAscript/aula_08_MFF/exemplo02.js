let alunos = [
    {nome: 'Caiã', nota: 9},
    {nome: 'davi', nota: 7}
]

let nomes = alunos.map(function(aluno){
    return aluno.nome
})
console.log(nomes)