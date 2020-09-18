<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view>  
	<view class="o_detail bgc-gray" :style="{height:height}">

			<view class="backbtn" @click="goback()">
			</view>
			<image src="/static/img4_2.png" mode="" class="bgimg_header"></image>
			<view class="d_ul">
				<view class="d_li">
					<view class="d_li_left">
						统一社会信用代码
					</view>
					<view class="d_li_right">
						{{list.credit_code}}
					</view>
				</view>
				<view class="d_li">
					<view class="d_li_left">
						单位名称
					</view>
					<view class="d_li_right">
						{{list.company_name}}
					</view>
				</view>
				<view class="d_li">
					<view class="d_li_left">
						职务
					</view>
					<view class="d_li_right">
						{{list.duty}}
					</view>
				</view>
				<view class="d_li">
					<view class="d_li_left">
						任职受雇日期
					</view>
					<view class="d_li_right">
						{{`${list.hire_time}`.slice(0,10)}}
					</view>
				</view>
				<view class="d_li">
					<view class="d_li_left">
						离职日期
					</view>
					<view class="d_li_right">
						{{`${list.leave_time}`.slice(0,10)}}
					</view>
				</view>
			</view>
			</view>
	</view>
</template>

<script>
	export default{
		onLoad(e){
			this.height = uni.getSystemInfoSync().screenHeight + 'px'
			let id = e.id
			this.$req
			.get(this.$api.employ_info_admin + id)
			.then(r=>{
				if(r.status == 200){
					let data = r.data;
					this.list = data
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
		}
	}
</script>

<style lang="less">
	.d_ul{
		width: 100%;
		background: #FFFFFF;
		padding: 0 35rpx;
		font-size: 30rpx;
		.d_li{
			.d_li_left{
				width: 190.09rpx;
				margin-right: 40.54rpx;
			}
			.d_li_right{
				color: #adadb0;
			}
			border-bottom: #e4e4e4 solid 1px;
			display: flex;
			padding: 27.02rpx 32.43rpx 27.02rpx  0;
		}
	}
</style>
