var express = require('express');
var router = express.Router();
const Combo = require('../model/Combo')
const { deleteSomeCombo } = require('../util/canteen')

router.get("/", async (req, res, next) => {
    const { canteenId } = req.query
    let combos;
    if (canteenId)
        combos = await Combo.find({ canteenId })
    else combos = await Combo.find()
    res.status(200).send(combos)
})
router.post("/add", async (req, res, next) => {
    const { canteenId,canteenName, name } = req.body
    const com = await new Combo({ canteenId,canteenName, name }).save()
    if (com)
        res.status(200).send({ msg: "success" })
    else res.status(200).send({ msg: "failure" })
})
router.post("/edit", (req, res, next) => {
    const data = req.body
    console.log(data);
    res.status(200).send({ msg: "success" })
})
router.delete("/delete", async (req, res, next) => {
    const ids = req.body
    const deletes = await deleteSomeCombo(ids)
    if (ids.toString() === deletes.toString())
        res.status(200).send({ msg: "success" })
    else res.status(200).send({ msg: "failure" })
})
module.exports = router