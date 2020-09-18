<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view>  
	<view class="bgc-gray">

		<view class="backbtn" @click="goback()">
		</view>
		<image src="/static/img1_3.png" mode="" class="bgimg_header"></image>
		<view class="v_ul">
			<view class="title_blue">
				纳税明细信息
			</view>
			<view class="v_li">
				<view class="v_li_value flex">
					<view class="">
						收入：
					</view>
					<view class="black">
						{{list.income}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						已申报税额：
					</view>
					<view class="black">
						{{list.tax}}元
					</view>
				</view>
				<view class="v_li_value li_img">
					<image src="/static/img1_3_1.png" mode="" class="img1"></image>
				</view>
			</view>
		</view>
		<view class="v_ul">
			<view class="title_blue">
				纳税明细-基础情况
			</view>
			<view class="v_li">
				<view class="v_li_value flex">
					<view class="">
						所得项目小类：
					</view>
					<view class="black">
						{{list.type == 0?'正常' + mclass[list.type]: mclass[list.type]}}
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						扣缴义务人名称：
					</view>
					<view class="black">
						{{list.employ.company_name}}
					</view>
				</view>
				<view class="v_li_value flex" style="align-items: flex-start;">
					<view class="" style="width:230rpx;">
						扣缴义务人纳税人识别号：
					</view>
					<view class="black">
						{{list.employ.credit_code}}
					</view>
				</view>
				<view class="v_li_value flex" style="align-items: flex-start;">
					<view class="">
						主管税务机关：
					</view>
					<view class="black" style="width: 400rpx;text-align: end;">
						{{list.employ.tax_authority}}
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						申报渠道：
					</view>
					<view class="black">
						{{list.channel}}
					</view>
				</view>
				
			</view>
		</view>
		<view class="v_ul">
			<view class="v_li">
			<view class="v_li_value flex">
				<view class="">
					申报日期：
				</view>
				<view class="black" >
					{{`${list.declare_time}`.slice(0,10)}}
				</view>
			</view>
			<view class="v_li_value flex">
				<view class="">
					税款所属期：
				</view>
				<view class="black">
					{{list.tax_time}}
				</view>
			</view>
			</view>
		</view>
		<view class="v_ul">
			<image src="/static/img1_3_2.png" mode="" class="img2"></image>
		</view>
		<view class="v_ul">
			<view class="title_blue">
				本期收入与扣除详情
			</view>
			<view class="v_li">
				<view class="v_li_value flex">
					<view class="">
						本期收入：
					</view>
					<view class="black">
						{{list.income}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						本期免税收入：
					</view>
					<view class="black">
						{{list.tax_exempt_income }}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						本期减除费用：
					</view>
					<view class="black">
						{{list.add_divide }}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						本期专项扣除：
					</view>
					<view class="black">
						{{list.special_deductions }}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						本期其他扣除：
					</view>
					<view class="black">
						{{list.other }}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						本期准予扣除的捐赠项目：
					</view>
					<view class="black">
						{{list.donate }}元
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
			let id = e.id
			this.$req
			.get(this.$api.income_tax_detail + id)
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
					employ:{
						
					}
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
		}
	}
</script>

<style lang="less">
	.bgc-gray{
		padding-bottom: 200rpx;
	}
	.flex{
		justify-content: space-between;
		margin: 18.01rpx 0 !important;
	}
	.li_img{
		justify-content: flex-end;
	}
	.v_li{
		padding: 10rpx 31.53rpx;
	}
	.img1{
		width: 209.9rpx;
		height:45.94rpx;
	}
	.img2{
		width: 100%;
		height: 150.45rpx;
	}
	.black{
		color: #333333;
	}
	
</style>
