const Produtos = new Array

class Produto{
    constructor(code, nome, preco){
        this.code = code,
        this.nome =  nome,
        this.preco = preco
    }
    addCardapio(){
        Produtos.push(this)
        return this
    }
}

const CachorroQuente = new Produto(100, 'Cachorro Quente', 3.0).addCardapio()
const HambrguerSimples  = new Produto(200, 'Hambúrguer Simples', 4.0).addCardapio()
const Cheeseburguer = new Produto(300, 'Cheeseburguer', 5.5).addCardapio()
const Bauru = new Produto(400, 'Bauru', 7.5).addCardapio()
const Refrigerante = new Produto(500, 'Refrigerante', 3.5).addCardapio()
const Suco = new Produto(600, 'Suco', 2.8).addCardapio()

function Pedido(code, qtd){
    const item = Produtos.find(p => p.code === code);
    if(item){
        let total = (item.preco * qtd).toFixed(2)
        return {
            sucess: true,
            data: {
                quantidade: qtd,
                nome: item.nome,
                total: total
            }
        }
    }else{
        return {
            success: false,
            error: `Produto ${code} não encontrado.`
        };
    }
}

function formatarMensagemPedido(resultado){
    if(resultado.sucess){
        return `Seu pedido de ${resultado.data.quantidade} ${resultado.data.nome} deu R$${resultado.data.total}`
    }else{
        return resultado.error
    }
}
const codeInformado = 300
const qtdInformado = 56

const resultadoPedido = Pedido(codeInformado,qtdInformado)
console.log(formatarMensagemPedido(resultadoPedido))
