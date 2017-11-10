const fs = require("fs")

const file = 'webschool.txt'
const data = '\nby dolfinNNN.'
const encoding = 'utf8'
const callback = (err) => {
  if (err) throw err
  console.log('Adicionado conteúdo novo!')
}

fs.appendFile(file, data, encoding, callback)
// fs.appendFile(file, data, 'utf8', callback)

// fs.appendFileSync(file, data)

console.log('Final da execução')

