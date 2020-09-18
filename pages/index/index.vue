<template>
	<view>
		<view class="status_bar">  
		    <view class="top_view"></view>  
		</view>  
		<home v-if="PageCur=='home'" ref="home"></home>
		<my v-if="PageCur=='my'"></my>
		<handle v-if="PageCur=='handle'"></handle>
		<serve v-if="PageCur=='serve'"></serve>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/home' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'active':''">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="handle">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/handle' + [PageCur=='handle'?'_cur':''] + '.png'"></image>
				</view>
				<view >办税</view>
			</view>
			<view class="action" @click="NavChange" data-cur="serve">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/serve' + [PageCur=='serve'?'_cur':''] + '.png'"></image>
				</view>
				<view>服务</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/my' + [PageCur == 'my'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='my'?'active':''">个人中心</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onPageScroll(e){
			if(this.$refs.home){
				this.$refs.home.scroll(e.scrollTop);
			}
		},
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.cu-bar{
		height: 111rpx;
	}
	.active{
		color: #4186f4;
	}
</style>
