const quaseArray7 = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
Object.defineProperty(quaseArray7, 'toString',{
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray7[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray7.toString(), meuArray)