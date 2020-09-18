<template>
	<view class="">
		<view class="status_bar">
		    <view class="top_view"></view>  
		</view> 
	<view class="bgc-gray" :style="{height:height}">
		<view class="backbtn" @click="goback()">
		</view>
		<image src="/static/img1_1.png" mode="" class="bgimg_header"></image>
		<view class="s_ul">
			<view class="title_blue">
				请选择纳税记录年度
			</view>
			<view class="cu-form-group">
				<view class="mytitle">年度</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker ml_">
						{{index>-1?picker[index]:'2020'}}
					</view>
				</picker>
			</view>
		</view>
		<view class="s_ul">
			<view class="title_blue">
				请选择所得类型
			</view>
			<checkbox-group class="block" @change="CheckboxChange">
				<view class="cu-form-group psr">
					<checkbox class='round blue' :class="checkbox[0].checked?'checked':''" :checked="checkbox[0].checked?true:false"
					 value="1"></checkbox>
					<view class="title2">工资薪金</view>
					
				</view>
				<view class="cu-form-group psr">
					<checkbox class='round blue' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false"
					 value="2"></checkbox>
					 <view class="title2">劳务报酬</view>
				</view>
				<view class="cu-form-group psr">
					<checkbox class='round blue' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
					 value="3"></checkbox>
					 <view class="title2">稿酬</view>
				</view>
				<view class="cu-form-group psr">
					<checkbox class='round blue' :class="checkbox[3].checked?'checked':''" :checked="checkbox[3].checked?true:false"
					 value="4"></checkbox>
					 <view class="title2">特许权使用费</view>
				</view>
			</checkbox-group>
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-myblue lg" @click="search" :disabled="disabled" type>查询</button>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		created(){
			this.height = uni.getSystemInfoSync().screenHeight + 'px'
		},
		data(){
			return {
				index: -1,
				height:'',
				picker: ['2020', '2019'],
				year:'2020',
				disabled:false,
				checkbox: [{
					value: '1',
					checked: true
				}, {
					value: '2',
					checked: true
				}, {
					value: '3',
					checked: true
				},{
					value: '4',
					checked: true
				}]
			}
		},
		methods:{
			search(){
				let _this = this
				let arr = []
				_this.checkbox.forEach(v=>{
					if(v.checked){
						arr.push(v.value)
					}
				})
				let obj = {type:arr,pay_time:this.year}
				obj = JSON.stringify(obj)
				obj = encodeURIComponent(obj)
				uni.showLoading({
					success() {
						setTimeout(()=>{
							uni.hideLoading()
							uni.navigateTo({
								url:'/pages/home/s_detail?obj=' + obj
							})
						},300)
					}
				})
				
			},
			PickerChange(e) {
				this.index = e.detail.value
				this.year = this.picker[e.detail.value]
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
			CheckboxChange(e) {
				let _this = this
				var items = _this.checkbox,
					values = e.detail.value,
					num = 0;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							num ++
							break
						}
					}
				}
				if(num == 0){
					_this.disabled = ''
				}
				else{
					_this.disabled = false
				}
				
			}
		}
	}
</script>

<style lang="less">
	.ml_{
		margin-left: -350rpx;
		font-size: 30rpx;
	}
	.s_ul{
		margin-bottom: 27.02rpx;
	}
	.mytitle{
		font-size: 30rpx;
	}
	.psr{
		position: relative;
	}
	.bg-myblue{
		background-color:#5285ed;
		color: #FFFFFF;
		height: 95.49rpx;
	}
	.title2{
		position: absolute;
		left: 110rpx;
		top: 50%;
		transform: translateY(-50%);
	}

</style>
