const { people } = require('../data')
const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people })
}

const createPeople = (req, res) => {
    const {name } = req.body;
    if(!name)
    {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    else {
        res.status(201).send({success: true, person: name})
    }
}

const updatePeople = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    if(!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    else {
        const list = [...people]
        var count = 0;
        const result = list.map((person, index) => {
            if(person.id === Number(id)) {
                count++;
                return {
                    ...person,
                    name: name
                }
            }
            else {
                return person
            }
        })
        // console.log(name + " " + id)
        // console.log(list)
        // console.log(count)
        // console.log(result)
        res.status(200).send({ success: true, person: result })
    }
}

const deletePeople = (req, res) => {
    const { id } = req.params
    const person = people.find(person => person.id === Number(id))

    if(!person) {
        return res.status(401).send("People not found")
    }
    const result = people.filter(person => person.id !== Number(id))
    return res.status(200).json({ success: true, person: result })
}

module.exports = { getPeople, createPeople, updatePeople, deletePeople }