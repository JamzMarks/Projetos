function Calc(num1, num2, ope){
    switch(ope){
        case '+':
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)
            break     
        default:
            console.log(`Operacao invalida`)

    }
}

Calc(10,5,'/')