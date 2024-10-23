const { investimento } = require("./investimento" );

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

            console.log (" Investimento editado com sucesso" )
        }else {
        console.log (" Investimento não encontrado")
        }

    } catch (error) { 
        console.error ( "Erro ao editar Investimento", error.message)           
    }   
            
}
module.exports = {editarInvestimento};