const paisFiltrado = pessoa => pessoa.profile.country = 'Brasil'

const salarioBaixo = (acc, curr) => {
        return acc.profile.salary < curr.profile.salary ? acc : curr;
};

const calcularMenorSalario = (funcionarios) => {
    if (funcionarios.length === 0) {
        return 'Nenhum funcionário encontrado.';
    }
    const resultado = funcionarios.filter(paisFiltrado).reduce(salarioBaixo);
    console.log(`O salário mais baixo é: ${resultado.profile.salary} do(a) ${resultado.profile.name}`);
    return resultado;
}

module.exports = {calcularMenorSalario}