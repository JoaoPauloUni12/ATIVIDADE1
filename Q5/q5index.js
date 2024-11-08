const filerManager = require('./fileManager')
const caminho = './dados.json'

const conteudo = {
    clientes :[
        {
            nome: 'João',
            idade: 26,
            cidade: 'marbá'
        },
        {
            nome: 'Maria',
            idade: 67,
            cidade: 'parauapebas'
        },
        {
            nome: 'Pedro',
            idade: 18,
            cidade: 'canaa'
        }
    ],
    campanhas :[
        {
            nome: 'Campanha 1',
            dataInicio: '2023-01-01',
            dataFim: '2023-01-31'
        },
        {
            nome: 'Campanha 2',
            dataInicio: '2023-02-01',
            dataFim: '2023-02-28'
        },
        {
            nome: 'Campanha 3',
            dataInicio: '2023-03-01',
            dataFim: '2023-03-31'
        }
    ]  
}
filerManager.escritaJson(caminho, JSON.stringify(conteudo))
const conteudoJson = filerManager.leituraJson(caminho)
console.log(conteudoJson)