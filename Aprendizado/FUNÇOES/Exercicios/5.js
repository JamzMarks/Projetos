function formatarValorDecimal(valorDecimal){
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(4.0300 + 6.019)