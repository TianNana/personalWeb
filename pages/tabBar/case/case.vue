<template>
	<view class="case"> 
		<view v-for='(item,index) in caseList' :key = 'index' class='caseItem'>
			<view class='titleCon'><text class='title'>项目名称：</text>{{item.name}}</view>
			<view class='kill'><text class='title'>技术栈：</text>{{item.kill}}</view>
			<view class='introduce'><text class='title'>项目介绍：</text>{{item.introduce}}</view> 
			<image class='caseImg' :src='item.imgShow' @tap='imgClick' :data-img = item.imgList mode='aspectFit'></image>
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
					name:'普瑞未来课堂-客户端',
					introduce:'这是一款为学校打造的高校教学的产品。',
					kill:'electron-vue + canvas + nodejs + less',
					imgShow:'https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd1.png',
					imgList:['https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd1.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd2.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd3.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd4.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd5.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd6.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd7.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd8.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd9.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/khd10.png']
				},{
					name:'普瑞未来课堂-小程序',
					introduce:'：这是一款专为教师及家长方便在课后管理及查看学生课堂及课后详细信息的产品。',
					kill:'uni-app + canvas + less',
					imgShow:'https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx1.jpg',
					imgList:['https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx0.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx1.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx2.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx3.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx4.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx5.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx6.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx7.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx8.jpg','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/xcx9.jpg']
				},{
					name:'普瑞未来教育平台',
					introduce:'该平台是为教师和学生提供线上教育模式。提供上课资源，批阅作业，为学生提供做作业入口等功能',
					kill:'js + jquery + vue',
					imgShow:'https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pc1.png',
					imgList:['https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pc1.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pc2.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pc3.png','https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/pc4.png']
				},{
					name:'百度开放平台官网',
					introduce:'官网所展示的为百度地图的一些功能与服务，并为开发者提供了开发文档',
					kill:'js + jquery', 
					imgShow:'https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/bdpc1.jpg',
					imgList:['https://nana-zone.oss-cn-beijing.aliyuncs.com/pictures/bdpc1.jpg']
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
