/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
programa na linguagem que desejar onde, informado um número, ele 
calcule a sequência de Fibonacci e retorne uma mensagem avisando 
se o número informado pertence ou não a sequência.*/
let val = 55
function Fibonacci(val){
    let num1 = 0
    let num2 = 1
    if(val == 1 || val == 0){
        console.log(`${val} Pertence a sequência de Fibonacci`)
        return true
    }else{
        while(num1 < val){
            let res = num1 + num2
            num1 = num2
            num2 = res       
            if(num1 > val){
                console.log(`${val} Não pertence a sequência de Fibonacci`)
                return false
            }else if(num1 == val){
                console.log(`${val} Pertence a sequência de Fibonacci`)
                return true
            }    
        } 
    }  
}
Fibonacci(val)
