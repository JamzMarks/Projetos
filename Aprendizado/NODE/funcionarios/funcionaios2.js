const axios = require('axios');
const url = 'https://api.json-generator.com/templates/-kCVls4SCzsb/data?access_token=td00ayar42biqiv26r5jbf2ncvkgmzt0wx2fqtn8'


const paisFiltrado = f => f.profile.country === 'China'
const menorSalario = (func, funcAtual) => {
    return func.profile.salary < funcAtual.profile.salary ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
    .filter(paisFiltrado)
    .reduce(menorSalario)

    console.log(func)
})