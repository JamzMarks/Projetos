 const soma = (a,b) => a + b

 //parametro default
 function log(texto = 'Node'){
    console.log(texto)

 }

 log(null)
 log(undefined)
 log()
 log('Sou mais forte')

 //operador rest
 function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
 }

 console.log(total(2,4,5,6))