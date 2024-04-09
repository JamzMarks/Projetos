//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

pessoa.nome = 'Brena'
console.log(pessoa)

//Object.freeze