class CriarCarro{
    constructor(marca, modelo, ano, tipo){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano,
        this.tipo = tipo
    }
    realizarVenda(){
        return Venda(this.tipo)
        
    }
}

function Venda(tipo){
    switch(tipo){

        case 'hatch':
            return `Pedido realizado com sucesso`
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return `Tem certeza que não prefere este modelo?`
        default:
            return `Nao trabalhamos com essa tipo`
    }
}

const c1 = new CriarCarro('Renault', 'Kwid', 2024, 'hatch')
const c2 = new CriarCarro('Mercedes', 'Bezs', 2024, 'sedans')
console.log(c1.realizarVenda())
console.log(c2.realizarVenda())