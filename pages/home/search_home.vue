<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view>  
		<view class="bgc-gray">
			<view class="backbtn" @click="goback()">
			</view>
			<image src="/static/img1_5_1.png" mode="" class="bgimg_header"></image>
			<image src="/static/img1_5_2.png" mode="" class="img152"></image>
			<view class="hide search" @click="goto('/pages/home/search')">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			goback(){
				uni.showLoading({
					success() {
						setTimeout(()=>{
							uni.hideLoading()
							uni.navigateBack()
						},300)
					}
				})
			},
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
	.bgimg_header{
		height: 95rpx;
	}
	.img152{
		margin-top: -25rpx;
		width: 100%;
		height: 1607.63rpx;
	}
	.search{
		width: 100%;
		height: 138.88rpx;
		top: 380rpx;
		left: 0;
	}
</style>
