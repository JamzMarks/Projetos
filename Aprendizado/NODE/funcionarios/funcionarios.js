const axios = require('axios');
const url = 'https://api.json-generator.com/templates/-kCVls4SCzsb/data?access_token=td00ayar42biqiv26r5jbf2ncvkgmzt0wx2fqtn8'


async function fetchData() {
    try {
        const response = await axios.get(url);
        const funcionarios = response.data;

        const resultado = funcionarios.filter(paisFiltrado).reduce(salarioBaixo);
        console.log(resultado)

        console.log(`O salario mais baixo e: ${resultado.profile.salary} do(a) ${resultado.profile.name}`)

    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}
fetchData();

const paisFiltrado = pessoa => pessoa.profile.country == 'Brasil'
const salarioBaixo = (acc, curr) => {
        return acc.profile.salary < curr.profile.salary ? acc : curr;
};
