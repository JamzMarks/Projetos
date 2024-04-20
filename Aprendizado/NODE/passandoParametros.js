module.exports = function saudacoes(...nomes) {
    return nomes.map(nome => `Boa Noite ${nome}!`);
  }