const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Massa']
pilotos.pop()

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(2,4)
console.log(algunsPilotos2)