const { calcularIdade } = require('./q1modulo')
var dtNascimento= "2000-05-25"
const idade = calcularIdade(dtNascimento);
console.log(`Sua idade é: ${idade} anos`);
