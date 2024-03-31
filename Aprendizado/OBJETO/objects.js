//Usando a notacao literal
const obj = {}
console.log(obj)

//Object em js
console.log(typeof Object, typeof new Object())

const obj2 = new Object
console.log(obj2)

//funcao construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }    
}

const p1 = new Produto(`Caneta`, 7.99, 0.15)
const p2 = new Produto(`Notebook`, 3540.00, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory
function criarFuncionario(nome,salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario(`Joao`, 7900, 4)
const f2 = criarFuncionario(`Maria`, 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object Create
const filha = Object.create(null)
filha.nome = `Ana`
console.log(filha)

//Uma funcao famose que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)