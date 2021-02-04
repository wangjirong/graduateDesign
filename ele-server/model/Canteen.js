const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name: String,
    avatar: String,
    adress: String,
    phone: String,
    relatedImages: Array,
    deliveryService: String,
    deliveryTime: Array,
    announcement: String,
    activities: Object,//满减活动

    mark: {
        type: Number,
        default: 0
    },
    monthySales: {
        type: Number,
        default: 0,
    },
    baseSendingFee: {
        type: Number,
        default: 10,
    },
    sendingFee: {
        type: Number,
        default: 0
    },
    consume: {
        type: Number,
        default: 12
    },
    sendingTime: {
        type: Number,
        default: 50
    },
    honor: String,
    tags: {
        type: Array,
        default: []
    }
})/*
餐厅基本信息
1、餐厅名
2、餐厅头像
3、餐厅地址
4、联系电话
5、实物图片
6、配送服务
7、配送时间
8、公告
9、评分
10、月售数量
11、起送费
12、配送费
13、人均消费
14、平均配送时间
15、荣誉||优质好评
*/
module.exports = mongoose.model("Canteen", schema)