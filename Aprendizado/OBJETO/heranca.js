const ferrari = {
    modelo: "ferrari",
    velMax: 324
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) 

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)