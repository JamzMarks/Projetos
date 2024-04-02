const pontos = [10, 21, 20, 24, 25, 9, 7, 30, 19, 27, 41, 4];

function calcularRecordes(pontos){
    let contadorRecordes = 0;
    let maiorPontuacao = pontos[0];
    let menorPontuacao = pontos[0];
    let indicePiorJogo = 1; // Jogos são contados a partir de 1, não 0

    pontos.forEach((ponto, indice) =>{
        if (indice === 0) return; // Ignora o primeiro ponto, já que não há base de comparação anterior

        if(ponto > maiorPontuacao){
            maiorPontuacao = ponto;
            contadorRecordes++; // Incrementa o contador de recordes

        }else if(ponto < menorPontuacao){
            menorPontuacao = ponto
            indicePiorJogo = indice  + 1

        } 
    })
    return {
        contadorRecordes,
        menorPontuacao,
        indicePiorJogo
    };
}

const resultado = calcularRecordes(pontos);
console.log(`Recordes quebrados: ${resultado.contadorRecordes}, Menor pontuação: ${resultado.menorPontuacao}, Pior jogo: ${resultado.indicePiorJogo}`);