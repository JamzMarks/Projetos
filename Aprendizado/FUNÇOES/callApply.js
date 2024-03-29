function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: `Notebook`,
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

console.log(getPreco.call(produto))
console.log(getPreco.apply(produto, [0.16, '$']))