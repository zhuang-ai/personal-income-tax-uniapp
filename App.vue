<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})


		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}

	}
</script>

<style lang="less">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	.status_bar {
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background-color: #000000;  
	}  
	.top_view {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    position: fixed;  
	    background-color: #000000;  
	    top: 0;  
	    z-index: 999;  
	}
	.hide{
		position: absolute;
		z-index: 999;
	}
	.bgcontainer{
		position: relative;
	}
	.title_blue{
		background: #FFFFFF;
		padding: 32.43rpx 54.05rpx;
		border-bottom: #e4e4e4 solid 1px;
		font-weight: 700;
		position: relative;
		font-size: 30rpx;
	}
	.title_blue:before{
		content:'';
		display: inline-block;
		border-radius: 2px;
		width: 9rpx;
		height: 31.53rpx;
		background-color: #5285ed;
		position: absolute;
		top: 38rpx;
		left: 31.53rpx;
	}
	.v_ul{
		margin-bottom: 27.02rpx;
		.v_li{
			border-radius: 5px;
			background-color: #FFFFFF;
			padding: 40.54rpx;
			.v_li_title{
				font-size: 30rpx;
				font-weight: 500;
			}
			.v_li_value{
				margin: 13.51rpx 0;
				display: flex;
				align-items: center;
				color:#aaadaf;
				font-size: 27.02rpx;
			}
		}
	}
	
	.backbtn{
		position: fixed;
		left: 0;
		top: 0;
		height: 100rpx;
		width: 126.12rpx;
		z-index: 999;
	}
	.bgc-gray{
		position: relative;
		background: #f3f6f8;
		margin-top: 109rpx;
	}
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}
	.bgimg_header{
		width: 100%;
		height: 109rpx;
		position:fixed;
		left: 0;
		top: var(--status-bar-height);
		z-index: 990;
	}
	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>
