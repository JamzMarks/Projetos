const fetchData = require('./fetchdata');
const {calcularMenorSalario} = require('./salaryUtils')


async function processData() {
    const url = 'https://api.json-generator.com/templates/-kCVls4SCzsb/data?access_token=td00ayar42biqiv26r5jbf2ncvkgmzt0wx2fqtn8'
    try {
        const data = await fetchData(url);

        const resultado = calcularMenorSalario(data);
        console.log(resultado);

    } catch (error) {
        console.error(error.message);
    }
}

processData()








