const notaDoAluno = 48

function classificaAluno(nota){
    let NotaCorrigida = ArredondarNota(nota)
    let status = Boolean

    if(NotaCorrigida >= 40){ 
        status = true
        return{NotaCorrigida, status}
    }else{
        status = false
        return{NotaCorrigida, status}
    }
};

function ArredondarNota(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else{    
        return nota
    }
};

const resultado = classificaAluno(notaDoAluno)
const mensagem = resultado.status === true
    ? `Com a nota ${resultado.NotaCorrigida} o aluno foi aprovado!!!`
    : `Com a nota ${resultado.NotaCorrigida} não foi dessa vez.`;

console.log(mensagem);

console.log(`${(() => {
    if(resultado.status === true){
        return `Com a nota ${resultado.NotaCorrigida} o aluno foi aprovado!!!`;
    } else {
        return `Com a nota ${resultado.NotaCorrigida} não foi dessa vez.`;
    }
})()}`);

