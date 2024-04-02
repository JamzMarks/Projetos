function bhaskara(a,b,c){ 
    let delta = b*b - 4*a*c
    if(delta < 0){
        return `delta:${delta} é negativo`
    }else if (delta === 0) {
        let x = -b / (2*a);
        return `Raiz dupla: x = ${x}`;
    }else{
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return `Duas raízes: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}` 
    }
}

// ax**2 - bx + c = 0
//x = -b+-
 console.log(bhaskara(-1,4,5))