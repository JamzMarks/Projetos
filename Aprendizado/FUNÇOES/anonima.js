const soma = function(x, y){
    return x + y
}

const subt = function(x, y){
    return x - y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(7,4, subt)
imprimirResultado(6,4, function(x, y){
    return x * y
})
imprimirResultado(8,4, (x, y) => x / y)

const pessoa = {
    falar: function(){
        console.log(`Opa`)
    },
    say: () => console.log(`Opa 2`)
}
