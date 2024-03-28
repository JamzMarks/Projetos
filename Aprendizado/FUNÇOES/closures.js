const x = `Global`

function fora(){
    const x = `Local`
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

const y = `Ali`

function diga(){
    const y = `Aqui`
    function dentro(y){
        return y
    }
    return dentro
}

const minhaFuncao2 = diga()
console.log(minhaFuncao2(y))