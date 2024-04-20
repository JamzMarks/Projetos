console.log(this === global)
console.log(this === exports)
console.log(this === module.exports)

export default function teste(){
    console.log(`Dentro da funcao`)
    console.log(this === global)
    console.log(this === exports)
    console.log(this === module.exports)
}
teste()