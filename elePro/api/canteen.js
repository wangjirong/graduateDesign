import request from '../util/request.js'

export function getAllCanteens(params) {
	return request({url:'/canteen',data:params})
}
