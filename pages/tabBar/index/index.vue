<template>
	<view class="content">
		<Banner></Banner>
		<TechField class='techfield'></TechField>
		<Introduce></Introduce>
	</view>
</template>

<script>
	import Banner from '@/components/pages/index/banner.vue';
	import TechField from '@/components/pages/index/techField.vue';
	import Introduce from '@/components/pages/index/Introduce.vue';
	export default {
		data() {
			return { 
			}
		},
		components: {Banner, TechField, Introduce},
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
