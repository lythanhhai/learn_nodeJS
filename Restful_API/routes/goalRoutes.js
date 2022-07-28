const express = require('express')

const router = express.Router()

const { getGoals, createGoals, updateGoals, deleteGoals } = require("../controller/goalController")

router.route("/").get(getGoals)
router.route("/").post(createGoals)
router.route("/update/:id").put(updateGoals)
router.route("/delete/:id").delete(deleteGoals)

module.exports = router