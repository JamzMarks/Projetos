const notas = [6.6, 7.7, 8.4, 9.2, 1.4, 3.5]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 67,
}

for(let valor in pessoa){
    console.log(`${valor} = ${pessoa[valor]}`)
}