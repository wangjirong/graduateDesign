var express = require('express');
var router = express.Router();
const multer = require('multer')
const AliOss = require('../util/upload')
const Menu = require('../model/Menu')
const { deleteSomeMenu } = require('../util/canteen')
router.get("/", async (req, res, next) => {
    const { canteenId, comboId } = req.query
    let menus
    if (canteenId && comboId)
        menus = await Menu.find({ canteenId, comboId })
    else menus = await Menu.find()
    res.status(200).send(menus)
})

//////////////////////////////////////////
let time = '';
let times = []
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'static/menuImage');
    },
    filename: (req, file, callback) => {
        time = Date.now() + '-';
        times.push(time)
        callback(null, time + file.originalname);
    }
})

const upload = multer({
    storage
});
///////////////////////////////
router.post("/add", upload.single("file"), async (req, res, next) => {
    const { data } = req.body
    const { originalname } = req.file
    console.log(data);
    const file = await AliOss.uploadImage(originalname, `static/menuImage/${time}${originalname}`)
    console.log(file);
    res.status(200).send({ msg: "success" })
    // const menu = await new Menu({
    //     ...data,
    //     monthySales: 0,
    //     oldPrice: 0,
    //     active: {},
    //     tags: [],
    //     likeNum: 0,
    //     specification: {}

    // }).save()
    // if (menu)
    //     res.status(200).send({ msg: "success" })
    // else res.status(200).send({ msg: "failure" })
})
router.post("/edit", (req, res, next) => {
    const data = req.body
    console.log(data);
    res.status(200).send({ msg: "success" })
})
router.delete("/delete", async (req, res, next) => {
    const ids = req.body
    const deletes = await deleteSomeMenu(ids)
    if (ids.toString() === deletes.toString())
        res.status(200).send({ msg: "success" })
    else res.status(200).send({ msg: "failure" })
})
module.exports = router