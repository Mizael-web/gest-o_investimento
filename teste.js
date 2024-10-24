var validator = require ("validator");

let telefone = "558499999-4554"
let nome = "."
let email = ""
let data = "24/10/2024";
let descricao = "teste"
let moeda = "676787"


// if (!validator.isLength(matricula, {min:3, max:5})){
//     console.error (" A matricula deve ter no minimo e carateres e no maximo 5")
//     return
// }

console.log (validator.isEmpty(nome));
console.log (validator.isEmail(email));
console.log (validator.isDate(data,{format:"DD/MM/YYYY"}));
console.log (validator.isLength (descricao, {min:3, max:10}));
console.log (validator.isMobilePhone(telefone, "pt-BR"))
console.log (validator.isISO4217(moeda));