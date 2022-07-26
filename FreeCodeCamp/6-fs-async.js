const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')
console.log("Start")
readFile('./Content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.error(err)
        return
    }
    const first = result;
    readFile('./Content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.error(err)
            return
        }
        const second = result;
        writeFile('./Content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err) {
                console.error(err)
                return
            }
            console.log("Done with this task")
        })
    })
})

function getText() {
    return new Promise((resolve, reject) => {
        readFile('./Content/first.txt', 'utf8', (err, result) => {
            if(err)
            {
                reject(err)
            }
            resolve(result)
        })
    })
}
console.log("Starting")
getText().then(res => console.log(res)).catch(err => console.log(err))