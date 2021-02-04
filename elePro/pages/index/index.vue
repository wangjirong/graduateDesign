<template>
	<view class="content">
		<view class="top-bar flex-vertical-space">
			<view class="location center">
				<image class="icon-image" src="../../static/icon/pageIcon/location.png" mode="aspectFit"></image>
				<text class="location-name">{{location}}</text>
				<icon type=""></icon>
			</view>
		</view>
		<view class="search flex-vertical">
			<icon type="search" :size="20"></icon>
			<input type="text" :value="keyword" :maxlength="12" />
		</view>
		<view class="nearby">
			<text class="title">附近商家</text>
			<view class="filter-group flex-vertical-space">
				<text class="filter-item" v-for="(item,index) in filter" :key="item.id" :class="selectIndex===index?'select-item':''"
				 @click="selectIndex=index">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				location: "盐水小学",
				keyword: "请输入商家或商品名称",
				selectIndex: 0,
				filter: [
					"综合排序", "销量高", "评分高", "速度块", "新人立减"
				]
			}

		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0;
		.top-bar {
			background-color: $uni-bg-color-primary;
			margin-top: -1px;
			align-items: center;
			padding-bottom: 10rpx;
			padding-left: 10rpx;
			.location-name{
				font-size: 34rpx;
				color: #FFFFFF;
			}
		}

		.search {
			border: 1px solid $uni-bg-color-primary;
			border-radius: 10px;
			margin: 10rpx 20rpx;
			padding: 10rpx 20rpx;
			align-items: center;
		}

		.nearby {
			margin: 10rpx 20rpx;
			.title{
				font-size: 34rpx;
				margin-bottom: 4rpx;
			}

			.filter-group {
				.filter-item {
					font-size: 32rpx;
					color: $uni-color-grey;
				}

				.select-item {
					color: $uni-color-select;
				}
			}
		}
	}
</style>
