const { investimento } = require("./investimento" );

function editarInvestimento (id,novotipoInvestimento, novovalorInicial,novovalorAtual,novodataInvestimento,novonivelRisco) {
    try {
        const investimentos = investimento.find (elementodoarray => 
         elementodoarray.id === id
    )
        if (investimentos){
            investimentos.tipoInvestimento = novotipoInvestimento,
            investimentos.valorInicial =novovalorInicial,
            investimentos.valorAtual = novovalorAtual,
            investimentos.dataInvestimento = novodataInvestimento,
            investimentos.nivelRisco = novonivelRisco

            console.log (" Investimento editado com sucesso" )
        }else {
        console.log (" Investimento não encontrado")
        }

    } catch (error) { 
        console.error ( "Erro ao editar Investimento", error.message)           
    }   
            
}
module.exports = {editarInvestimento};