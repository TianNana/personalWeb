<template>
	<view class="skill">
		<!-- <text class='skillTitle'>技能墙</text> -->
		<scroll-view class='skillCon' scroll-y>
			<text v-for='(item, index) in skillData' :style='{background:item.color,width:item.value}' :key='index' class='skillItem'>
				{{item.name}} 
			</text>
		</scroll-view> 
	</view>
</template>

<script>
	import shareWXMixins from '@/public/shareWXMixins'; 
	export default {
		mixins:[shareWXMixins],
		data() {
			return {
				skillData:[{
					name:'vue',
					value:'74%',
					color:'#e4ebf9'
				},{
					name:'less',
					value:'23%',
					color:'#fefbe3'
				},{
					name:'uni-app',
					value:'54%',
					color:'#f9f4ca'
				},{
					name:'css3',
					value:'43%',
					color:'#edfcea'
				},{
					name:'javaScrip',
					value:'100%',
					color:'#f9caf8'
				},{
					name:'html5',
					value:'72%',
					color:'#ebf7de'
				},{
					name:'canvas',
					value:'25%',
					color:'#dbe5fb'
				},{
					name:'electron',
					value:'54%',
					color:'#caf9d0'
				},{
					name:'jQuery',
					value:'43%',
					color:'#f4f5f4'
				},{
					name:'html',
					value:'100%',
					color:'#f9deca'
				},{
					name:'git',
					value:'43%',
					color:'#f6f9d0'
				},{
					name:'react',
					value:'35%',
					color:'#f4f5f4'
				},{
					name:'nodeJs',
					value:'17%',
					color:'#eaf0fc'
				},{
					name:'css',
					value:'100%',
					color:'#caf9cb'
				}]
			}
		},
		components: { },
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.skill{
		width: 100%;
		min-height: 100%;
		.skillTitle {
			height: 100rpx;
			line-height: 100rpx;
			font-size: 36rpx;
			display: inline-block;
			color: #000;
			padding-left: 5%;
			display: inline-block;
			text-align: center;
			width: 100%;
		}
		.skillCon {
			// background: rgba(0, 0, 0, 0.3);
			width: 100%; 
			height: calc(100% - 140rpx);
			position: fixed; 
			padding: 30rpx;
		}
		.skillItem {
			width:23%;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			color:#666;
			font-size: 28rpx; 
			background: #fff;
			display: inline-block;
			border-radius: 10rpx;
			margin-right: 10rpx;
			margin-bottom: 10rpx;
		}
		.skillConList {
			margin-bottom: 26rpx;
			padding:10rpx 20rpx;
			border-radius: 10rpx;
			display: inline-block;
			.skillItemTitle {
				font-size: 28rpx;
				color: #252525;
				margin-bottom: 16rpx;
				display: inline-block;
			}
			.skillItemCon {
				width: 100%;
				background: #dfe4ef;
				height: 30rpx;
				border-radius: 10rpx;
				.skillItemValue {
					background: #f00;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>
