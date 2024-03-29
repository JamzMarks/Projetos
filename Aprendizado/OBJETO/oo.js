//Procedural
const produto = new Object
 produto.nome = `Notebook `
 produto.preco = 3000
 produto.calc = function CalcularPrecofinal() {
    let precofinal = this.preco + (this.preco * 0.1);
    return precofinal;
}

//console.log(produto)
//console.log(produto.calc())

const Carro = {
    nome: `Uno`,
    preco: 12000,
    montadora: `Fiat`,

    condutores: [{
        nome: `Jose`,
        idade: 56,
        sexo: `masculino`
    },
    {
        nome: `Josefina`,
        idade: 52,
        sexo: `feminino`
    },
    {
        nome: `Amanda`,
        idade: 18,
        sexo: `feminino`
    }],
    precoSeguro: function (){
        let precoSeguroFinal = (this.preco * 0.03) * this.condutores.length
        return precoSeguroFinal
    },

}

console.log(Carro.precoSeguro())