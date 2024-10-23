const {investimento} = require ("./investimento" );

function excluirInvestimento(id) {
     
    try {
        const indice = investimento.findIndex (elementodoarray => 
         elementodoarray.id === id
    )
        if (indice === -1){
           
            console.log (" Aluno não encontrado" )
        }else {
            investimento.splice (indice, 1)
            console.log ( "Investimento deletado com sucesso!")
        }


    } catch (error) { 
        console.error ("Erro ao excluir Investimento", error.message)           
 }   
            
}

     module.exports = {excluirInvestimento};