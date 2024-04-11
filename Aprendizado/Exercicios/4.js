function imprimeResultadoEResto(x,y){
    let resultado = x/y
    console.log(`Resultado da divisão: ${resultado}`)

    return `O resto da divisao e ${x % y}`
}

console.log(imprimeResultadoEResto(5,4))