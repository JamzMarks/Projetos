const precoPlano = 100

class PlanoSaude{
    constructor(nome, idade, sexo ){
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo
    }
    precoPlano(){
        const precoIdade = IddPrecoPlano(this.idade)
        const total = precoPlano + precoIdade
        return total
    }
}

function IddPrecoPlano(idade){
    if(idade < 10){
        return 80;
    }else if(idade >= 10 && idade < 30){
        return 50;
    }else if(idade >= 30 && idade < 60){
        return 95;
    }else if(idade >= 60){
        return 130;
    }
}

const p1 = new PlanoSaude('Fernando', 48, 'masculino')

const msg = p1.precoPlano()
console.log(`O preco total do plano do Sr(a)${p1.nome} sera ${msg} `)