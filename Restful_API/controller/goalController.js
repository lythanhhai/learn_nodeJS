const asyncHandler = require('express-async-handler')
const Goal = require("../model/goalModel")

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const createGoals = asyncHandler(async (req, res) => {
    // console.log(req.body.text)
    if(!req.body.text)
    {
       
        res.status(400)
        throw new Error("please add a text field")
    }
    // const goals = await Goal.create({ text: "1"})
    res.status(200).json({ success: true, message: "post"})
})

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, message: "put"})
})

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, message: "delete"})
})

module.exports = { getGoals, createGoals, updateGoals, deleteGoals }