const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Leitura síncrona do arquivo
try {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    console.log(conteudo);
} catch (err) {
    console.error("Erro ao ler arquivo de forma síncrona:", err);
}

// Leitura assíncrona do arquivo
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) {
        console.error("Erro ao ler arquivo de forma assíncrona:", err);
        return;
    }
    try {
        const config = JSON.parse(conteudo);
        console.log(`${config.db.host}: ${config.db.port}`);
    } catch (parseError) {
        console.error("Erro ao analisar o JSON:", parseError);
    }
});

// Uso do require para carregar o JSON
try {
    const config = require('./arquivo.json');
    console.log(config);
} catch (err) {
    console.error("Erro ao carregar JSON com require:", err);
}

// Listando arquivos no diretório atual
fs.readdir(__dirname, (err, arquivos) => {
    if (err) {
        console.error("Erro ao listar diretório:", err);
        return;
    }
    console.log('Conteúdo da pasta:');
    console.log(arquivos);
});