function LeNumero(num){
    const numeroExtenso = ['zero', 'um', 'dois','tres','quatro','cinco', 'seis','sete','oito','nove','dez']

    if(numeroExtenso[num] == undefined ){
        return `Numero fora do intervalo`
    }else{
        return numeroExtenso[num]
    }
}

console.log(LeNumero(4))