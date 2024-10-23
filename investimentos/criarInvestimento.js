const {investimento} = require ("./investimento" );

function criarInvestimento (id,tipoInvestimento,valorInvestimento,valorAtual, dataInvestimento, nivelRisco) {
    const novoInvestimento = {
      id,
      tipoInvestimento,
      valorAtual,
      dataInvestimento,
      nivelRisco
    }
   try {
      investimento.push (novoInvestimento);      
   }
    catch(error) {
      ("error ao cadastrar dados", error.mensage);
   }            
}
    module.exports = {criarInvestimento };