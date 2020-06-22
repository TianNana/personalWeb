<template>
	<view class="case"> 
		<image class='caseItem' src='/static/case/pc/1.png'></image>
	</view>	 
</template>

<script>
	import { media } from '@/common/utils.js';
	import shareWXMixins from '@/public/shareWXMixins';
 	export default {
		mixins:[shareWXMixins],
		data() {
			return {
				 
			}
		},
		components: { },
		onLoad() {

		},
		methods: {
			imgClick(){
				media.previewImage(0, ['../../static/case/pc/1.png'])
			}
		}
	}
</script>

<style lang="less" scoped>  
	.case {
		.caseItem {
			width: 100%;
			height: 300rpx;
			margin-right: 24rpx;
			margin-top: 20rpx;
			border:1px solid #eee;
			padding: 20rpx;
			background:#fff;
			box-sizing: border-box;
		}
	}
</style>
