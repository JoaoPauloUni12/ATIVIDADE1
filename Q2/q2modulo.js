export function media(vetor) {
    var soma = 0
    vetor.forEach(element => {
        soma = soma+element
    });
    return soma / vetor.length
}

export function menor(vetor) {
    return Math.min(...vetor)
}

export function maior(vetor) {
    return Math.max(...vetor)
}
