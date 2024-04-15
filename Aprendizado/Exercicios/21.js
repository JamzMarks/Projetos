const precoPlano = 100

class PlanoSaude{
    constructor(nome, idade, sexo ){
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo
    }
    precoPlano(){
        const precoIdade = IddPrecoPlano(this)
        const total = precoPlano + precoIdade
        return total
    }
}

const p1 = new PlanoSaude('Fernando', 49, 'masculino')
console.log(p1)


function IddPrecoPlano(conveniado){
    switch(conveniado){
        case this.idade < 10:
            return 80
        case this.idade >= 10 && this.idade < 30:
            return 50
        case this.idade >= 30 && this.idade < 60:
            return 95
        case this.idade >= 60:
            return 130
    }
}

const msg = p1.precoPlano()
console.log(`O preco total do plano do Sr(a)${p1.nome} sera ${msg} `)