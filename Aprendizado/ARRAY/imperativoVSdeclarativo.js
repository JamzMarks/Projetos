const alunos = [
    {nome: 'Joao', nota: 7.3},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Pedro', nota: 9.8},
    {nome: 'Ana', nota: 8.7},
]

//Imperativo
let total = 0
for(let i=0;i< alunos.length;i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

