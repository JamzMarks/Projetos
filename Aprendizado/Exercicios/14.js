function Frutas(fruta){
    switch(fruta){
        case 'maca':
            console.log(`Nao vendemos essa fruta`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de kiwi`)
            break
        case 'melancia':
            console.log(`3 reais o quilo`)
            break
        default:
            console.log(`Erro`)
    }
}

Frutas('maca')
Frutas('melancia')
Frutas('kiwi')
Frutas('asd')