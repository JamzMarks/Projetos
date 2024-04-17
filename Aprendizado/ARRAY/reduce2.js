const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]

// Desafio 1: Todos os alunos sao bolsistas?
const todosBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado && bolsista
})
console.log(todosBolsista)

const tdBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(tdBolsistas))

const todosBolsistas2 = alunos.reduce((resultado, aluno) => {
    // console.log(`Verificando aluno: ${aluno.nome}, Bolsista: ${aluno.bolsista}`);
    // console.log(`Resultado até agora: ${resultado}`);
    return resultado && aluno.bolsista}, true );
console.log(todosBolsistas2);


// Desafio 2: Algum aluno e bolsista?
const algumBolsista = alunos.reduce((resultado, aluno) => resultado || aluno.bolsista, false)
console.log(algumBolsista)
