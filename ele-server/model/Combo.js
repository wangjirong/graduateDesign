const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    canteenId: String,//对应的餐厅id
    canteenName: String,//对应的餐厅名称
    name: String,//套餐名称
    state: {
        type: Boolean,
        default: false
    },//菜品状态，是否上架 
})
module.exports = mongoose.model("Combo", schema)