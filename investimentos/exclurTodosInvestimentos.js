const { investimento } = require("./investimento");

function excluirTodosInvestimento() {
    try {
        alunos.length = 0
        console.log("Investimentos excluidos com sucesso!")
    } catch (error) {
        console.error("Erro ao excluir todos os Investimentos!")
    }
}

module.exports = { excluirTodosInvestimento }