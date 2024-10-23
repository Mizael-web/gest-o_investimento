const {investimento} = require ("./investimento" );

function listarInvestimento(){
    try {
        investimento.forEach((investimento) => { 
            console.table (investimento)
        })
    } catch (error){
           console.error("erro ao listar investimento", error.message);           
    } 
}         
        
module.exports = {listarInvestimento }; 