function Triangulos(c1,c2,h){
    if(c1 == c2 && c1 == h){
        return console.log(`Triangulo Equilatero`)
    } else if(c1 == c2 || h && c2 == h) {
        return console.log(`Triangulo Isósceles`)
    } else {
        return console.log(`Triangulo Escaleno`)
    }
}

Triangulos(4,2,3)