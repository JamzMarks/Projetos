// Cadeia de prototipos(prototype chain)
Object.prototype.attr0 = 'O'
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0)

const carro = {
    velAtual: 0,
    VelMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.VelMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: `F40`,
    velMax: 324 //shadowing
}

const volvo = {
    modelo: `V40`,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())