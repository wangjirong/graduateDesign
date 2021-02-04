<template>
	<view class="content">
		<view class="order-type flex-vertical-space">
			<text class="order-type-item" v-for="(item,index) in orderType" :key="item+index" @click="selectIndex=index" :class="selectIndex===index?'select-order-type-item':''">{{item}}</text>
		</view>
		<view class="order-group">
			<view class="order-item" v-for="(item,index) in orderList">
				
			</view>
			<view class="empty flex-column" v-if="orderList.length===0">
				<image src="" mode="aspectFill"></image>
				<text v-if="selectIndex===0">没有订单哦~</text>
				<text v-if="selectIndex===1">没有待评价订单哦~</text>
				<text v-if="selectIndex===2">没有退款订单哦~</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderType: [
					"全部订单", "待评价", "退款" 
				],
				selectIndex: 0,
				orderList:[
					
				],
				allOrder:[],
				needComment:[],
				refund:[]

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.order-type {
			.order-type-item {
				color: $uni-color-grey;
				font-size: 32rpx;
				padding-bottom: 10rpx;
			}

			.select-order-type-item {
				color: $uni-color-select;
				border-bottom: 4rpx solid $uni-color-select;
			}
		}
	}
</style>
