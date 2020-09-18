<template>
	<view class="bgcontainer">
		<image src="/static/img3.png" mode="" class="bgimg"></image>
		<view class="hide search" @click="goto('/pages/home/search')">
			
		</view>
	</view>
</template>

<script>
	export default{
	
		methods:{
		goto(url){
			uni.showLoading({
				success() {
					setTimeout(()=>{
						uni.hideLoading()
						uni.navigateTo({
							url:url
						})
					},300)
				}
			})
		},
		}
	}
</script>

<style lang="less">
	.bgimg{
		width: 100%;
		height: 1938.19rpx;
		margin-bottom: 111rpx;
	}
	.search{
		top: 230rpx;
		left: 550rpx;
		width: 150rpx;
		height: 150rpx;
	}
</style>
