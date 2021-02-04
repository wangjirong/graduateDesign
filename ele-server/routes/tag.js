var express = require('express');
var router = express.Router();
const Tag = require("../model/Tag")
router.get('/', async (req, res, next) => {
    const { canteenId } = req.query
    const tags = await Tag.find({ canteenId })
    res.status(200).send(tags)
})
router.post('/add', async (req, res, next) => {
    const { tagName, canteenId } = req.body;
    console.log(tagName, canteenId);
    const flag = await Tag.findOneAndUpdate({ canteenId }, {
        '$push': { "tags": tagName }
    })
    if (flag)
        res.status(200).send({ msg: "success" })
    else res.status(200).send({ msg: "failure" })

})
module.exports = router