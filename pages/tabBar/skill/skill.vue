<template>
	<view class="skill">
		<view class='skillItem' v-for='(item, index) in skillData' :key='index'>{{item}}</view> 
	</view>
</template>

<script>
	import shareWXMixins from '@/public/shareWXMixins'; 
	export default {
		mixins:[shareWXMixins],
		data() {
			return {
				skillData:['html','css','js','vue','electron','uni-app','git','canvas','jquery','less']
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
	.skill {
		display: flex;
		flex-wrap: wrap;
		.skillItem {
			width:25%;
			height: 200rpx;
			text-align: center;
			line-height: 200rpx;
			color:#666;
			font-size: 28rpx;
			border:1px solid #eee;
			background: #fff;
		}
	}
</style>
