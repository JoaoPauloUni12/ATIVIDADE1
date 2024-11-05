import { media, menor, maior } from './q2modulo.js'

const notas = [10,4,3.5,6,7,1.5,2.3,8,5,9.5,9.9]

const mediaNt = media(notas)
const menorNt = menor(notas)
const maiorNt = maior(notas)

console.log(`A média é: ${mediaNt}`)
console.log(`A menor notaé: ${menorNt}`)
console.log(`A maior nota é : ${maiorNt}`)
