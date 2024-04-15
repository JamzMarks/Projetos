const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Carderno", "preco": 13.90}',
    '{"nome": "Kit Lapis", "preco": 41.90}',
    '{"nome": "Caneta", "preco": 7.80}'
]
console.log(carrinho[0])

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const carrinhoObj = carrinho.map(paraObjeto).map(apenasPreco)

console.log(carrinhoObj)

