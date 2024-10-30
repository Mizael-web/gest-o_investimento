const {investimento} = require ("./investimento" );

var validator = require ( "validator");

function criarInvestimento (id,tipoInvestimento,valorInvestimento,valorAtual, dataInvestimento, nivelRisco) {
    const novoInvestimento = {
      id,
      tipoInvestimento,
      valorInvestimento,
      valorAtual,
      dataInvestimento,
      nivelRisco
    }
    try {
      if (!validator.isLength(id, { min: 3, max: 5 })) {
        console.error(
          "A Id deve ter no minimo 3 caracteres e no maximo 5"
        );
        return;
      } 
  
      // if (!validator.isEmpty(id)) {
      //   console.error("A Id informado é invalido");
      //   return;
      // }
      if (
        validator.isEmpty(tipoInvestimento) ||
        validator.isEmpty(valorInvestimento) ||
        validator.isEmpty(valorAtual) ||
        validator.isEmpty(dataInvestimento) ||
        validator.isEmpty(nivelRisco)


      ) {
        console.error("Todos os campos devem serem preenchidos!");
        return;
      }
  
      investimento.push(novoInvestimento);
      return novoInvestimento;
    } catch (error) {
      console.error("Erro ao cadastrar dados", error.message);
    }
  }
  
  module.exports = { criarInvestimento };