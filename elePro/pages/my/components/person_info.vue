<template>
	<view class="content flex-column">
		<view class="info flex-vertical">
			<image :src="info.avatar" class="avatar" mode="scaleToFill"></image>
			<view class="infomation flex-column">
				<text class="userName">{{info.userName}}</text>
				<text class="phoneNumber">{{info.phone}}</text>
			</view>
		</view>
		<view class="others">
			<view class="item flex-vertical" v-for="item in list">
				<image :src="item.icon" mode="aspectFit" class="icon-image"></image>
				<text class="title">{{item.title}}</text>
			</view>
		</view>
		<button type="default" class="quit-account">退出账号</button>
	</view>

</template>

<script>
	export default {
		props: {
			info: {
				type: Object
			}
		},
		data() {
			return {
				list: [{
						icon: '../../static/icon/myIcons/collect.png',
						title: "我的收藏",
						pagePath: ""
					},
					{
						icon: '../../static/icon/myIcons/comment.png',
						title: "我的评价",
						pagePath: ""
					},
					{
						icon: '../../static/icon/myIcons/invite.png',
						title: "邀请有奖",
						pagePath: ""
					},
					{
						icon: '../../static/icon/myIcons/service.png',
						title: "客服中心",
						pagePath: ""
					},
					{
						icon: '../../static/icon/myIcons/help.png',
						title: "帮助与反馈",
						pagePath: ""
					},
					{
						icon: '../../static/icon/myIcons/phone.png',
						title: "修改手机号",
						pagePath: ""
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 0;
		margin-top: -1px;
		background-color: $uni-bg-color-grey;
		.info{
			padding: 0 0 20rpx 20rpx;
			align-items: center;
			background-color: $uni-bg-color-primary;
			.infomation{
				margin-left: 20rpx;
				justify-content: center;
				.userName,.phoneNumber{
					font-size: 32rpx;
					color: #FFFFFF;
				}
				.userName{
					margin-bottom: 10rpx;
				}
			}
		}
		.others{
			padding-top: 20rpx;
			margin-bottom: 30rpx;
			background-color: #FFFFFF;
			.item{
				padding: 28rpx 20rpx;
				border-top: 1rpx solid #eee;
				font-size: 32rpx;
				.title{
					margin-left: 22rpx;
				}
			}
		}
		.quit-account{
			width: 100%;
			background-color: #FFFFFF;
			border: none;
			outline: none;
		}
	}
</style>
