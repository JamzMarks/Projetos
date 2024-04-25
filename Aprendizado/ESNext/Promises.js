function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(outraFrase => outraFrase.concat('?!?'))
    .then(outraFrase2 => outraFrase2.concat('abc'))
    .then(frase => console.log(frase))
    .catch(e => console.log(e))