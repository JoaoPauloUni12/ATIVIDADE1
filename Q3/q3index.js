import _ from 'lodash'

const arry = [1,2,11,24,33,25,10,1]

const ordem = _.sortBy(arry)
console.log("Array ordenado em ordem crescente:", ordem)

const semDuplicatas = _.uniq(arry)
console.log("Array sem duplicatas:", semDuplicatas)

const soNumPares = _.filter(arry, (numero) => numero % 2 === 0)
console.log("Números pares do arrray:", soNumPares)

const valoresDobrados = _.map(arry, (numero) => numero * 2)
console.log("Valores dobrados do array:", valoresDobrados)

const somasArray = _.sum(arry)
console.log("Soma dos valores do array:", somasArray)