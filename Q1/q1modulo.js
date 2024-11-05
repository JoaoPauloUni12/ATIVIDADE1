function calcularIdade(dt) {
    const dtHoje = new Date()
    const dtNascimento = new Date(dt)
    let idade= dtHoje.getFullYear() -dtNascimento.getFullYear()
    const mes = dtHoje.getMonth()- dtNascimento.getMonth()
    if (mes < 0 || (mes === 0 && dtHoje.getDate() < dtNascimento.getDate())) {
        idade--;
    }
    return idade;
}
module.exports = {
    calcularIdade,
};
