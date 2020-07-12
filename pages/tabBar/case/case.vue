<template>
	<view class="case"> 
		<view v-for='(item,index) in caseList' :key = 'index' class='caseItem'>
			<view class='titleCon'><text class='title'>项目名称：</text>{{item.name}}</view>
			<view class='kill'><text class='title'>技术栈：</text>{{item.kill}}</view>
			<view class='introduce'><text class='title'>项目介绍：</text>{{item.introduce}}</view> 
			<image class='caseImg' :src='item.imgShow' @tap='imgClick' :data-img = item.imgList></image>
		</view>
		
	</view>	 
</template>

<script>
	import { media } from '@/common/utils.js';
	import shareWXMixins from '@/public/shareWXMixins';
 	export default {
		mixins:[shareWXMixins],
		data() {
			return {
				caseList:[{
					name:'普瑞未来教育平台',
					introduce:'普瑞未来教育平台普瑞未来教育平台普瑞未来教育平台普瑞未来教育平台',
					kill:'jquery+js+vue',
					imgShow:'https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pt1.png',
					imgList:['https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pt1.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pt2.png']
				},{
					name:'普瑞未来教育平台',
					introduce:'普瑞未来教育平台普瑞未来教育平台普瑞未来教育平台普瑞未来教育平台',
					kill:'jquery+js+vue',
					imgShow:'https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pt1.png',
					imgList:['https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pt1.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pt2.png']
				}]
				 
			}
		},
		components: { },
		onLoad() {

		},
		methods: {
			imgClick(event){
				media.previewImage(0, event.currentTarget.dataset.img)
			}
		}
	}
</script>

<style lang="less" scoped>  
	.case {
		padding: 20rpx;
		background: #F9F9F9;
		.caseImg {
			width: 100%;
			height: 300rpx;
			margin-right: 24rpx;
			margin-top: 20rpx; 
			background:#fff;
			box-sizing: border-box; 
		}
		.caseItem {
			border:1px solid #eee;
			margin-bottom: 30rpx;
			padding: 20rpx;
			background: #fff;
			.title {
				color: #252525;
				font-size: 30rpx; 
				width: 150rpx;
				display: inline-block;
				font-weight: normal;

			}
			.titleCon {
				color: #252525;
				font-weight: bold;
				font-size: 32rpx; 
				margin-bottom: 10rpx;
			}
			.introduce,.kill {
				font-size: 26rpx; 
				margin-bottom: 10rpx;
				color: #333;
			}
		}
	}
</style>
