<template>
	<view class="bgcontainer">
		<view class="header">
			<image src="/static/banner1.png" mode="" class="banner1" ></image>
			<image src="/static/banner2.png" mode="" class="banner2" v-show="imgshow"></image>
		</view>
			<view>
				<image src="/static/img1.png" mode="" class="bgimg"></image>
			</view>
			<view class="hide search2" @click="goto('/pages/home/search_home')">
				
			</view>
			<view class="hide accounts" @click="goto('/pages/home/accounts')" >
				
			</view>
			<view class="hide search" @click="goto('/pages/home/search')" >
				
			</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				imgshow:false
			}
		},

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
			scroll(e){
				if(e>0){
					this.imgshow = true
					return
				}
				else{
					this.imgshow = false
				}
			}
		}
	}
</script>

<style lang="less">
	.search,.accounts{
		top: 1513rpx;
		left: 28rpx;
		width: 688rpx;
		height: 140rpx;
	}
	.search2{
		width: 138.88rpx;
		height: 160rpx;
		top: 380rpx;
		left: 306.25rpx;
	}
	.accounts{
		top: 1160rpx;
	}
	.header{
		height: 109.02rpx;
	}
	.banner1,.banner2{
		width: 100%;
		height: 109.02rpx;
	}
	.banner2{
		position: fixed;
		top:  var(--status-bar-height);
		left: 0;
		z-index: 999;
	}
	.bgimg{
		width: 100%;
		height: 2749.3rpx;
		margin-bottom: 111rpx;
		margin-top: -30rpx;
	}

</style>
