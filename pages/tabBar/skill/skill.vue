<template>
	<view class="skill">
		<!-- <text class='skillTitle'>技能墙</text> -->
		<scroll-view class='skillCon' scroll-y>
			<text v-for='(item, index) in skillData' :style='{background:item.color,width:item.value,color:item.fontColor}' :key='index' class='skillItem'>
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
					color:'#CCCCFF',
					fontColor:'#7171c8'
				},{
					name:'less',
					value:'23%',
					color:'#CCFFFF',
					fontColor:'#3c7f7f'
				},{
					name:'uni-app',
					value:'54%',
					color:'#FFCCCC',
					fontColor:'#954e4e'
				},{
					name:'css3',
					value:'43%',
					color:'#FFCC99',
					fontColor:'#ab6928'
				},{
					name:'javaScrip',
					value:'100%',
					color:'#CCFF99',
					fontColor:'#498b07'
				},{
					name:'html5',
					value:'72%',
					color:'#CCCCCC',
					fontColor:'#787070'
				},{
					name:'canvas',
					value:'25%',
					color:'#99CCCC',
					fontColor:'#3d6e6e'
				},{
					name:'electron',
					value:'54%',
					color:'#FFFFCC',
					fontColor:'#8a8a15'
				},{
					name:'jQuery',
					value:'43%',
					color:'#FF9966',
					fontColor:'#b25729'
				},{
					name:'html',
					value:'100%',
					color:'#CCCC99',
					fontColor:'#7b7b46'
				},{
					name:'git',
					value:'43%',
					color:'#CCCCFF',
					fontColor:'#6969a7'
				},{
					name:'react',
					value:'35%',
					color:'#fff',
					fontColor:'#3b3838'
				},{
					name:'nodeJs',
					value:'17%',
					color:'#FFFFCC',
					fontColor:'#868641'
				},{
					name:'css',
					value:'100%',
					color:'#FFCCCC',
					fontColor:'#864343'
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
			color:#fff;
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
