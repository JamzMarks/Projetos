const notas = [7.7, 5.4, 1.3, 4.6, 9.5, 8.3]

//sem callback

let notasbaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

//Com callback

const notasbaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasbaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7)

console.log(notasbaixas3)
