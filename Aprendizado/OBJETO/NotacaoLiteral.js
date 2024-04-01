let a = 1
let b = 2
let c = 3

const obj1 = {a: a, b: b, c:c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const valorAttr = 8
const nomeAttr = `nota`

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    function1: function(){
        //...
    },
    funcao2(){
        
    }
}

console.log(obj5)