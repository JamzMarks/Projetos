// ESB: Object.values/Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.keys(obj))
console.log(Object.entries(obj))


//Melhorias
const nome = 'Carla'
const pessoa ={
    nome,
    ola(){
        return 'Ola'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    fala(){
        return 'Au au!'
    }
}

const dog = new Cachorro
console.log(dog.fala())