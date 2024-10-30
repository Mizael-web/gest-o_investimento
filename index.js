const prompt = require ("prompt-sync")();
var validator = require ( "validator");


const {criarInvestimento} = require ("./investimentos/criarInvestimento")
const {editarInvestimento} = require ("./investimentos/editarInvestimento")
const {excluirInvestimento} = require ("./investimentos/excluirInvestimento")
const {listarInvestimento} = require ("./investimentos/listarInvestimento")


    criarInvestimento("100", "tesourodireto", "R$. 1.000,00", "R$. 1.500,00", "10/01/2020 ", "baixo");
    criarInvestimento("202", "CDB","R$. 2000,00", "R$. 5.000,00", "05/10/2005", "medio");
    criarInvestimento("606", "dolar","R$. 5000,00", "R$. 10.000,00", "25/10/2010", "alto");

    
    listarInvestimento()
    editarInvestimento ("100","ouro","R$. 3.000,00", "R$. 3.500,00","15/08/2015", " alto" );
    

    //exluir o aluno 192123
    // depois listaralunos
    // excluirInvestimento("2");
    // excluirInvestimento ( "1");
    // listarInvestimento ();