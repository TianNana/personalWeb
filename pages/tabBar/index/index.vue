<template>
	<view class="content">
		<Banner></Banner>
		<TechField class='techfield'></TechField>
		<Introduce></Introduce>
		<ShareMorePeoPle></ShareMorePeoPle>
	</view>
</template>

<script>
	import Banner from '@/components/pages/index/banner.vue';
	import TechField from '@/components/pages/index/techField.vue';
	import Introduce from '@/components/pages/index/Introduce.vue';
	import ShareMorePeoPle from '@/components/pages/index/shareMorePeoPle.vue';
	import shareWXMixins from '@/public/shareWXMixins';
	export default {
		mixins:[shareWXMixins],
		data() {
			return { 
			}
		},
		components: {Banner, TechField, Introduce, ShareMorePeoPle},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped> 
.techfield {
	width: 100%;
}
</style>
