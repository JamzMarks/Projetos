const numeroPassado = 10
const divisor = 2

function VerificaNumero(num,divisor){
    if(num % divisor == 0){
        return true
    }else{
        return false        
    }
}

const VerificaNumero2 = (num, divisor) => num % divisor === 0;

const mensagem = VerificaNumero2(numeroPassado, divisor) === true
    ? `O numero ${numeroPassado} e divisil por ${divisor}.`
    : `O numero ${numeroPassado} nao e divisil por ${divisor}.`

console.log(mensagem)