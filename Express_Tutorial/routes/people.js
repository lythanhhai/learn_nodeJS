const express = require('express');
const router = express.Router()
const { getPeople, createPeople, updatePeople, deletePeople } = require('../controller/people')

// router.get("/", getPeople)

// router.post("/", createPeople)

// router.put("/:id", updatePeople)

// router.delete('/delete/:id', deletePeople)

router.route('/').get(getPeople)

router.route("/").post(createPeople)

router.route("/:id").put(updatePeople)

router.route('/delete/:id').delete(deletePeople)


router.get("/api/items", (req, res) => {
    res.send("items")
})

// router.listen(port, () => {
//     console.log(`server is running at ${port}`)
// })

module.exports = router