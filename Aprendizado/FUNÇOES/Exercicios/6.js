function regimeDeJuros(capital, taxa, tempo){
    const jurosSimples = () => {
        let juros = capital * (taxa / 100) * tempo
        return juros
    }
    const jurosCompostos = () => {
        let montante = capital * (1 + (taxa / 100))**tempo
        let jurosComp = montante - capital;
        return jurosComp
    }
    console.log(`Juros simples: ${jurosSimples().toFixed(2)}`)
    console.log(`Juros compostos: ${jurosCompostos().toFixed(2)}`)
}

regimeDeJuros(24000, 13, 2)
