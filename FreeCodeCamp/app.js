// const { items, singlePerson } = require('./1-alternative-flavor')

// console.log(items[0] + " " + singlePerson.name)

// const addValues = require('./2-mind-grenada')

// addValues.addValues()

// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]

// const newItems = _.flattenDeep(items);
// console.log(newItems)

const { createReadStream } = require('fs')

const stream = createReadStream('./Content/second.txt')

stream.on('data', (result) => {
    console.log(result)
})

// https://www.youtube.com/watch?v=Oe421EPjeBE&t=25s&ab_channel=freeCodeCamp.org youtube