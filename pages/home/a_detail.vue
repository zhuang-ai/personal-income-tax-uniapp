<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view>  
	<view class="bgc-gray">
		<view class="backbtn" @click="goback()">
		</view>
		<image src="/static/img1_4_2.png" mode="" class="bgimg_header"></image>
		<scroll-view scroll-x class="bg-white nav text-center  scroll">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" 
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<image src="/static/2.png" mode="" class="Seal"></image>
		<view class="container">
			<view class="v_ul">
				<view class="title_blue">
					缴款详情：
				</view>
				<view class="v_li">
					<view class="v_li_value flex">
						<view class="">
							应退税额：
						</view>
						<view class="black">
							{{list.info.tax_rebate}}元
						</view>
					</view>
					<view class="v_li_value flex">
						<view class="">
							滞纳金：
						</view>
						<view class="black">
							{{list.info.overdue_fine}}元
						</view>
					</view>
					<view class="v_li_value flex">
						<view class="">
							本次申报已缴税额：
						</view>
						<view class="black">
							{{list.info.time_tax_paid}}元
						</view>
					</view>
					<view class="v_li_value flex">
						<view class="">
							本次申报已退税额：
						</view>
						<view class="black">
							{{list.info.time_refund_paid}}元
						</view>
					</view>
				</view>
			</view>
		<view class="v_ul">
			<view class="v_li">
				<view class="v_li_value flex">
					<view class="">
						税款所属年度：
					</view>
					<view class="black">
						{{list.info.pay_time}}
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						税款所属期起：
					</view>
					<view class="black">
						{{list.info.pay_time}}-01
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						税款所属期止：
					</view>
					<view class="black">
						{{list.info.pay_time}}-12
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						汇缴地主管税务机关：
					</view>
					<view class="right black">
						{{list.tax_authority}}
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="">
						任职受雇单位：
					</view>
					<view class="right black">
						{{list.company_name}}
					</view>
				</view>
			</view>
		</view>
		<view class="v_ul">
			<view class="title_blue">
				综合所得年度申报明细
			</view>
			<view class="v_li black">
		<!-- 		<view class="v_li_value flex">
					<view class="black">
						收入合计：
					</view>
					<view class="black">
						{{list.income}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						费用合计：
					</view>
					<view class="black">
						{{list.cost}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						免税收入：
					</view>
					<view class="black">
						{{list.tax_exempt_income}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						减除费用：
					</view>
					<view class="black">
						{{list.add_divide}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						专项扣除合计：
					</view>
					<view class="black">
						{{list.special_deductions}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						专项附加扣除合计：
					</view>
					<view class="black">
						{{list.addition}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						其他扣除合计：
					</view>
					<view class="black">
						{{list.other}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						准予扣除的捐款额：
					</view>
					<view class="black">
						{{list.donate}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						应纳税所得额：
					</view>
					<view class="black">
						{{list.tax_amount_income}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						应纳税额：
					</view>
					<view class="black">
						{{list.tax_amount_payable}}元
					</view>
				</view>
				<view class="v_li_value flex">
					<view class="black">
						减免税额：
					</view>
					<view class="black">
						{{list.tax_deduction}}元
					</view>
				</view> -->
				<view class="v_li_value flex">
					<view>
						已缴税额：
					</view>
					<view class="black">
						{{list.info.tax_rebate}}元
					</view>
				</view>
			</view>
		</view>
		</view>
			<image src="/static/img1_4_3.png" mode="" class="foot"></image>
		</view>
		</view>
</template>

<script>
	export default{
		onLoad(option){
			this.height = uni.getSystemInfoSync().screenHeight + 'px';
			let id = option.id
			this.$req
			.get(this.$api.declare_query + `${id}/`)
			.then(r=>{
				if(r.status == 200){
					this.list= r.data
				}
			})
		},
		data(){
			return {
				height:'',
				tabNav: ['申报记录', '缴税记录', '退税记录'],
				TabCur: 0,
				list:{
						"info": {
						"id": '',
						"tax_rebate": "",
						"overdue_fine": "",
						"time_tax_paid": "",
						"time_refund_paid": "",
						"pay_time": ""
						},
						"tax_authority": "",
						"company_name": "",
						"income": '',
						"cost": '',
						"tax_exempt_income": '',
						"add_divide": '',
						"special_deductions": '',
						"addition": '',
						"other": '',
						"donate": '',
						"tax_amount_income": '',
						"tax_amount_payable": '',
						"tax_deduction": '',
						"tax_paid": ''
						}
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
	.Seal{
		width: 264.86rpx;
		height: 282.88rpx;
		position: absolute;
		top: 10rpx;
		right: 0;
		z-index: 666;
	}
	.bgc-gray{
		padding-bottom: 200rpx;
	}
	.flex{
		justify-content: space-between;
		margin: 30rpx 0 !important;
		align-items: flex-start;
	}

	.v_li{
		padding: 10rpx 31.53rpx;
	}
	.right{
		width: 400rpx;
		text-align: right;
	}
	.black{
		color: #333333 !important;

	}
	.foot{
		border-top: 3px #E5E5E5 solid;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 97.29rpx;
		width: 100%;
	}
</style>
