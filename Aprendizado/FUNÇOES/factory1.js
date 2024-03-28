//Factory simples

function criarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
// criarPessoa()
console.log(criarPessoa(`ana`, `silva`))