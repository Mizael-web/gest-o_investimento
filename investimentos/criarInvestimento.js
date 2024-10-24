const {investimento} = require ("./investimento" );
const validator  = require("validator")

function criarInvestimento (id,tipoInvestimento,valorInvestimento,valorAtual, dataInvestimento, nivelRisco) {
    const novoInvestimento = {
      id,
      tipoInvestimento,
      valorAtual,
      dataInvestimento,
      nivelRisco
    }
   try {

      if (
         validator.isEmpty(tipoInvestimento) ||
         validator.isEmpty (valorInvestimento) ||
         validator.isEmpty (valorAtual) ||
         validator.isEmpty ( dataInvestimento) ||
         validator.isEmpty (nivelRisco)        
      )  
      {
         console.log ("Todos os campos devem ser preenchidos")      
         return
      } 
      investimento.push (novoInvestimento);      
   }
    catch(error) {
      console.error("error ao cadastrar dados", error.message);
   }            
}
    module.exports = {criarInvestimento };