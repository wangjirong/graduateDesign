var express = require('express');
const multer = require('multer')
var router = express.Router();
const Canteen = require('../model/Canteen')
const Tag = require('../model/Tag')
const AliOss = require('../util/upload')
const { deleteSomeCanteens } = require('../util/canteen')
/* getAllCanteens */
router.get('/', async (req, res, next) => {
    const cans = await Canteen.find();
    res.status(200).send(cans)
})

// addCanteen

let time = '';
let times = []
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'static/canteenImage');
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
//////////////////////////////////////////////////
router.post('/add', upload.array("files", 10), async (req, res, next) => {
    let files = req.files
    let { data } = req.body
    let promises = await AliOss.uploadFilePro("ele-canteen-image/", "canteenImage", times, files)
    let result = await Promise.all(promises)
    let relatedImages = result.slice(0, result.length - 1)
    let avatar = result[result.length - 1]
    console.log(data);
    let canteen = new Canteen({
        ...JSON.parse(data), avatar, relatedImages
    }).save()
    times = []
    if (canteen) {
        await new Tag({
            canteenId: (await canteen).id
        }).save()
        res.status(200).send({ msg: "success" })
    }

    else res.status(200).send({ msg: "failure" })



})
router.post('/edit', upload.single('file'), async (req, res, next) => {

})
router.post('/delete', async (req, res, next) => {
    const ids = req.body;
    const result = await deleteSomeCanteens(ids)
    if (ids.toString() === result.toString())
        res.status(200).send({ msg: "success" })
    else res.status(200).send({ msg: "failure" })

})
module.exports = router;
