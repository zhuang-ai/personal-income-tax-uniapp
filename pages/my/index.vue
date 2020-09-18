<template>
	<view class="bgcontainer">
		<view class="hide detail" @click="goto('/pages/my/office')"></view>
		<image :src="sex == 0?'/static/nan.png':'/static/nv.png'" mode="" class="headimg"></image>
		<image src="/static/img4.png" mode="" class="bgimg"></image>
		<view class="nick">
			{{nick}}
		</view>
		<view class="mobile">
			{{phone}}
		</view>
	</view>
</template>

<script>
	export default{
		created:function(){
			this.$req
			.get(this.$api.user_detail)
			.then(r=>{
				if(r.status == 200){
					let data = r.data;
					this.nick =data.username;
					this.sex = data.sex
					 let str = data.mobile;
					  let pre =  str.substr(0,3);
					  let next = str.substr(7,4);
					  let result  =  pre + '****' + next;
					this.phone = result
				}
			})
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
		},
		data(){
			return {
				nick:'',
				phone:'',
				sex:0
			}
		}
	}
</script>

<style lang="less">
	.headimg{
		position: absolute;
		top: 86rpx;
		left: 40rpx;
		z-index: 999;
		height: 126.38rpx;
		width: 126.38rpx;
	}
	.nick,.mobile{
		position: absolute;
		top: 102rpx;
		left: 196rpx;
		height: 40rpx;
		z-index: 999;
		color: #FFFFFF;
		font-size: 35rpx;
	}
	.mobile{
		top: 158rpx;
	}
	.bgimg{
		width: 100%;
		height: 1355.85rpx;
		margin-bottom: 111rpx;
	}
	.detail{
		width: 100%;
		top: 342.34rpx;
		left: 0;
		height: 99.09rpx;
	}
</style>
