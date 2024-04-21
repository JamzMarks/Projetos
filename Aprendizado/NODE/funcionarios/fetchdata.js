const axios = require('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao buscar dados da API:", error);
    }
}

module.exports = fetchData;