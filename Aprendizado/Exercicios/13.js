function CriarMes(dia1, qtdDias){
    const semana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    const mes = []    
    let i = dia1
    while(mes.length < qtdDias){
        mes.push(semana[i])
        i++
        if(i == 7){
            i = 0
        } 
    }
    console.log(mes)
    return mes
     
}


function DeterminaDia(dia){
    let indice = dia - 1
    switch(mesAtual[indice]){
        case 'Domingo':
        case 'Sabado':
            return `${mesAtual[indice]} e fim de semana`
        case 'Segunda':
        case 'Terca':
        case 'Quarta':
        case 'Quinta':
        case 'Sexta':
            return `${mesAtual[indice]} e dia util`
        default:
            return `Erro`
    }
}

const mesAtual = CriarMes(4,31)
const msg = DeterminaDia(3)
console.log(msg)