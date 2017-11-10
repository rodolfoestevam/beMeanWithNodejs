const fs = require('fs')

const file = 'creatingfile.txt'
const data = 'file created, we are fucking gods\n VIDA LOKAAAA!'
const enconding = 'utf-8'
const callback = (err) => {
    if (err) throw err
    console.log('I have saved a file Async!!')
}


//Async
fs.writeFile(file, data, callback)

// fs.writeFile(file, data, 'utf-8', callback)

// SYNC
// fs.writeFile(file, data)
console.log('Saved Asynchronously')

console.log('Final of execution');