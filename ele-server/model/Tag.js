const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    canteenId: String,
    tags: Array
})
module.exports = mongoose.model("Tag", schema)