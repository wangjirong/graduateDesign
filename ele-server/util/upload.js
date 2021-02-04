const multer = require('multer');
const OSS = require('ali-oss')
const fs = require('fs');
const uploadsResource = require('../config/alioss.config');
const { resolve } = require('path');
const { rejects } = require('assert');
let client = new OSS({
    region: uploadsResource.region,
    accessKeyId: uploadsResource.accessKeyId,
    accessKeySecret: uploadsResource.accessKeySecret,
    bucket: uploadsResource.bucket
})
client.useBucket(uploadsResource.bucket)

function getStorageTime(folder) {
    let time = '';
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, folder);
        },
        filename: (req, file, callback) => {
            time = Date.now() + '-';
            callback(null, time + file.originalname);
        }
    })
    return {
        storage,
        time
    }
}
async function uploadImage(fileName, filePath) {
    try {
        let result = await client.put(fileName, filePath)
        return result
    } catch (error) {
        throw error;
    }
}

async function deleteImage(filePath) {
    try {
        fs.unlinkSync(filePath)
    } catch (error) {
        throw error;
    }
}

async function uploadFilePro(folder, originfolder, times, files) {
    return files.map((file, index) => {
        return new Promise(async (resolve, reject) => {
            let res = await uploadImage(folder + file.originalname, `static/${originfolder}/${times[index]}${file.originalname}`)
            await deleteImage(`static/${originfolder}/${times[index]}${file.originalname}`)
            if (res) resolve(res.url)
            else reject()
        })
    })
}

module.exports = {
    uploadImage,
    getStorageTime,
    deleteImage,
    uploadFilePro
}