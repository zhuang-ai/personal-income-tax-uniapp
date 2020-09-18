<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view> 
	<view class="bgc-gray" :style="{height:height}">
		<view class="backbtn" @click="goback()">
		</view>
		<image src="/static/img1_4.png" mode="" class="bgimg_header"></image>
		<scroll-view scroll-x class="bg-white nav text-center  scroll">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<view class="container" v-show="TabCur == 0">
			<image src="/static/img1_4_1.png" mode="" class="img1"></image>
		</view>
		<view class="container" v-show="TabCur == 1">
			<view class="a_title">
				2020-04
			</view>
			<view class="v_ul" v-for="(item,index) in list">
			<view class="v_li" @click="goto('/pages/home/a_detail?id=' + item.id)">
				<view class="v_li_title flex">
					<view class="">
						{{item.pay_time}}年度综合所得年度汇算
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						税款所属期：
					</view>
					<view class="">
						{{item.pay_time}}-01 至 {{item.pay_time}}-12
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						已退税额：
					</view>
					<view class="company flex">
						<view class="text">
							{{item.tax_rebate}}元
						</view>
					</view>
				</view>
			</view>
			</view>
		</view>
		</view>
		</view>
</template>

<script>
	export default{
		created(){
			this.height = uni.getSystemInfoSync().screenHeight + 'px',
			this.$req
			.get(this.$api.declare_query)
			.then(r=>{
				if(r.status == 200){
					this.list = r.data
				}
			})
		},
		data(){
			return {
				height:'',
				tabNav: ['未完成', '已完成', '已作废'],
				TabCur: 0,
				list:[]
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
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="less" scoped>
	.scroll{
		top: calc(var(--status-bar-height) + 109rpx);
		position: fixed;
		z-index: 900;
	}
	.cu-item{
		width: 33%;
		margin: 0;
	}
	.container{
		margin-top: 202rpx;
	}
	.img1{
		width: 100%;
		height: 1293.69rpx;
	}
	.a_title{
		padding: 27.02rpx 40rpx;
		color: #a6a8af;
	}
</style>
