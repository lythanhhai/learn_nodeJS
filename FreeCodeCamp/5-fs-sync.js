
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf8')

console.log(first + "\n" + second)

writeFileSync('./Content/result-sync.txt', `Update file by write file sync: \n${first + "\n" + second}`)