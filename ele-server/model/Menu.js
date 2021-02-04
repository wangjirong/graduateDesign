const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    canteenId: String,//对应的餐厅id
    canteenName: String,//对应的餐厅名称
    comboId: String,//对应的套餐id
    comboName: String,//对应的套餐名称
    name: String,//菜品名称
    monthySales: Number,//月售数量
    singlePrice: Number,//单价
    oldPrice: Number,//历史价格
    active: Object,//活动
    detail: String,//商品详情
    priceState: String,//价格说明
    tags: Array,//标签
    likeNum: Number,//点赞数量
    specification: Object,//规格

    state: {
        type: Boolean,
        default: false
    },//菜品状态，是否上架 
})
module.exports = mongoose.model("Menu", schema)