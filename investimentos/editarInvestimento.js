const { investimento } = require("./investimento" );
const validator  = require("validator")

function editarInvestimento (id,novotipoInvestimento, novovalorInicial,novovalorAtual,novodataInvestimento,novonivelRisco) {
    try {

               const investimentos = investimento.find (elementodoarray => 
         elementodoarray.id === id
    )
        if (investimento){
            investimento.tipoInvestimento = novotipoInvestimento,
            investimento.valorInicial =novovalorInicial,
            investimento.valorAtual = novovalorAtual,
            investimento.dataInvestimento = novodataInvestimento,
            investimento.nivelRisco = novonivelRisco

         validator.isEmpty(id) ||
         validator.isEmpty (novotipoInvestimento) ||
         validator.isEmpty (novovalorInicial) ||
         validator.isEmpty (novovalorAtual) ||
         validator.isEmpty (novodataInvestimento) ||
         validator.isEmpty (novonivelRisco)



            console.log (" Investimento editado com sucesso" )
        }else {
        console.log (" Investimento não encontrado")
        }

       
    } catch (error) { 
        console.error ( "Erro ao editar Investimento", error.message)           
    }   
            
}
module.exports = {editarInvestimento};