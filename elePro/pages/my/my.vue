<template>
	<view class="content">
		<Infomation :info="person"/>
	</view>
</template>

<script>
	import Infomation from './components/person_info.vue'
	export default {
		components:{Infomation},
		data() {
			return {
				person:{
					avatar:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-05%2F171320454.jpg&refer=http%3A%2F%2Fimg.qqzhi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614667757&t=65c90efd115a3b29406fb994cc06ca19",
					userName:"old wang",
					phone:18844116310
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0;
	}

</style>
