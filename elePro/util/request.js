import {
	base_URL
} from './config.js'
export default function request(options) {
	return new Promise((resolve, reject) => {
		let res = uni.request({
			url: base_URL + options.url,
			method: options.method || "GET",
			data: options.data,
			success: (res) => {
				resolve(res.data)
			},
			fail: (error) => {
				uni.showToast({
					title: "请求失败~"
				})
			}
		})
	})
}
