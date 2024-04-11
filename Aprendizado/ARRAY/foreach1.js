const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome,indice, array){
    console.log(`${indice +1}) ${nome}`)
    console.log(array)
})

aprovados.forEach((nome, indice) => console.log(`${indice +1}) ${nome}`))

const exibirAprovados = (nome, indice) => console.log(`${indice +1} - ${nome}`)
aprovados.forEach(exibirAprovados)

