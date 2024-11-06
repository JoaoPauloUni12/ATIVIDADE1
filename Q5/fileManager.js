const { error } = require('console')
const fs = require('fs')


function leituraJson(nomeArquivo){
    try{
        return fs.readFileSync(nomeArquivo, 'utf-8')
    }catch(error){
        return console.log("houve erro leitura:",error)
    }
}
function escritaJson(nomeArquivo, conteudo){
    try{
        return fs.writeFileSync(nomeArquivo, conteudo)
    }catch(error){
        return console.log("houve erro escrita:",error)
    }
}
module.exports = {
    escritaJson,
    leituraJson
}