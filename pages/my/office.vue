<template>
	<view class="">
		
	<view class="status_bar">
	    <view class="top_view"></view>  
	</view>  
	<view class="office bgc-gray" :style="{height:height}">

		<view class="backbtn" @click="goback()">
		</view>
		<image src="/static/img4_1.png" mode="" class="bgimg_header"></image>
		<view class="v_ul" v-for="(item,index) in list" :key="index">
			<view class="v_li" @click="goto('/pages/my/detail?id=' + item.id)">
				<view class="v_li_title">
					{{item.company_name}}
				</view>
				<view class="v_li_value">
					<view class="">
						统一社会信用代码：
					</view>
					<view class="">
						{{item.credit_code}}
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						职务：
					</view>
					<view class="">
						{{item.duty}}
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						任职受雇日期：
					</view>
					<view class="">
						{{`${item.hire_time}`.slice(0,10)}}
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						离职日期：
					</view>
					<view class="">
						{{`${item.leave_time}`.slice(0,10)}}
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
			this.height = uni.getSystemInfoSync().screenHeight + 'px'
			this.$req
			.get(this.$api.employ_info_admin)
			.then(r=>{
				if(r.status == 200){
					let data = r.data;
					this.list = data.results
				}
			})
		},
		data(){
			return {
				height:'',
				list:{}
			}
		},
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
	.v_ul{
		padding: 0 30.63rpx;
	}

</style>
