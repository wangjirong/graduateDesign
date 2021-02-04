const Canteen = require('../model/Canteen')
const Combo = require('../model/Combo')
const Menu = require('../model/Menu')
function deleteSomeCanteens(ids) {
    return new Promise(async (resolve, reject) => {
        const results = ids.map(async (id, index) => {
            const can = await Canteen.findByIdAndDelete(id);
            return can && can._id
        })
        resolve(await Promise.all(results))
    })
}

function deleteSomeCombo(ids) {
    return new Promise(async (resolve, reject) => {
        const results = ids.map(async (id, index) => {
            const com = await Combo.findByIdAndDelete(id);
            return com && com._id
        })
        resolve(await Promise.all(results))
    })
}
function deleteSomeMenu(ids) {
    return new Promise(async (resolve, reject) => {
        const results = ids.map(async (id, index) => {
            const menu = await Menu.findByIdAndDelete(id);
            return menu && menu._id
        })
        resolve(await Promise.all(results))
    })
}
module.exports = {
    deleteSomeCanteens, deleteSomeCombo, deleteSomeMenu
}