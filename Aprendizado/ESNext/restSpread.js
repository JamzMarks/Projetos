//Operador ...rest(juntar)/spread(espalhar)
//usar rest com parametro de funcao

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1232.45}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//spread array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)