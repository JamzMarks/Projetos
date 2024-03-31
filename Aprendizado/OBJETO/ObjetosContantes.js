// pessoa -> 123 -> {...}
const pessoa = {nome: `joao`}
console.log(pessoa)

pessoa.nome = `Pedro` 
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = `Maria`
console.log(pessoa)

pessoa.end = `Rua ABC`
console.log(pessoa)