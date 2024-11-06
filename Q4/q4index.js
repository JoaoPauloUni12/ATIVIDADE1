import fs from 'fs'
import chalk from 'chalk'

fs.readFile('texto.md', 'utf8', (err, data) => {
    if (err) { 
        console.error(chalk.red('Erro ao ler o arquivo:'), err)
        return
    } 
    console.log(chalk.green('conteúdo do arquivo lido com sucesso:'))
    console.log(data)

    const regex = / \[([^\] ]+)]\((http[^\)]+)\)/g
    const links = []
    let match; 
    while ((match = regex.exec(data)) !== null) { 
        links.push({ text: match[1], url: match[2] })
    }
    let result = data
    links.forEach(link => { 
        const coloredLink = chalk.green(link.text) + chalk.red(` (${link.url})`)
        result = result.replace(`[${link.text}](${link.url})`, coloredLink)
    })
    console.log(chalk.yellow('Texto com link coloridos:'))
    console.log(result)
})