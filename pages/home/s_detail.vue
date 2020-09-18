<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view>  
	<view class="bgc-gray" :style="{height:height}">

		<view class="backbtn" @click="goback()">
		</view>
		<image src="/static/img1_2.png" mode="" class="bgimg_header"></image>
		<view class="top">
				<view class="flex mb">
					<image src="/static/img1_2_1.png" mode=""></image>
					<view class="">
						{{list.income}}元
					</view>
				</view>
				<view class="flex">
					<image src="/static/img1_2_2.png" mode="" class="img2"></image>
					<view class="">
						{{list.tax}}元
					</view>
				</view>
		</view>
		<view class="v_ul" v-for="(item) in list.data">
			<view class="v_li" @click="goto('/pages/home/detail?id=' + item.id)">
				<view class="v_li_title flex">
					<view class="">
						{{mclass[item.type]}}
					</view>
					<view style="margin-right: 45.04rpx;">
						{{item.tax_time}}
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						所得项目小类：
					</view>
					<view class="">
						{{item.type == 0?'正常' + mclass[item.type]: mclass[item.type]}}
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						扣缴义务人：
					</view>
					<view class="company flex">
						<view class="text">
							{{item.employ.company_name}}
						</view>
						<image src="/static/icon_next.png" mode=""></image>
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						收入：
					</view>
					<view class="">
						{{item.income}}元
					</view>
				</view>
				<view class="v_li_value">
					<view class="">
						已申报税额：
					</view>
					<view class="">
						{{item.tax}}元
					</view>
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
			let obj = e.obj
			obj = decodeURIComponent(obj)
			obj = JSON.parse(obj)
			this.$req
			.get(this.$api.income_tax_detail,obj)
			.then(r=>{
				if(r.status == 200){
					this.list = r.data
					
				}
			})
		},
		data(){
			return {
				height:'',
				list:{
					"income": '666',
					"tax": '666',
					"data": [ ],
					},
					"mclass":['工资薪金','劳务报酬','稿酬','特许权使用费']
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
	.top{
		width: 100%;
		background-color: #FFFFFF;
		padding: 27.02rpx;
		margin-bottom: 25.22rpx;
		image{
			height: 38.73rpx;
			width: 199.99rpx;
		}
		.mb{
			margin-bottom: 27.02rpx;
		}
		.img2{
			width: 225.22rpx;
		}
	}
	.flex{
		justify-content: space-between;
		align-items: center;
	}
	.v_ul{
		border-bottom: #e4e4e4 solid 1px;
		.v_li{
			margin: 0;
			.v_li_value{
				font-size: 28rpx;
			}
		}
		
	}
	.company{
		width: 70%;
		.text{
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			width: 280rpx;
		}
		image{
			width: 32.43rpx;
			height: 39.63rpx;
			margin-right: -40rpx;
		}
	}
</style>
