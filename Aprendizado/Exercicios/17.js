class Funcionario{
    constructor(nome = 'Generico', salario = 0, plano){
        this.nome = nome,
        this.salario = salario,
        this.plano = plano 
    }
    CalcularAumento(){
        let salarioAtual = this.salario
        switch(this.plano){
            case this.plano = 'A':
                return (salarioAtual * 1.10).toFixed(2)
            case this.plano = 'B':
                return (salarioAtual * 1.15).toFixed(2)
            case this.plano = 'C':  
                return (salarioAtual * 1.20).toFixed(2)
            default:
                return `plano ${this.plano} invalido`
        }
    }
}



const Fernando =  new Funcionario('Fernando', 1800, 'A')
const Amanda =  new Funcionario('Amanda', 3500, 'B')
const Juraci =  new Funcionario('Juraci', 7000, 'C')

console.log(Fernando.CalcularAumento())
console.log(Amanda.CalcularAumento())
console.log(Juraci.CalcularAumento())