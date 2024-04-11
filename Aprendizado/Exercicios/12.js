function Fatorial(num){
    let res = 1
    for(let fator = num; fator > 0; fator--){
        res*=fator  
    }
    return res
}
const msg = Fatorial(5)
console.log(msg)