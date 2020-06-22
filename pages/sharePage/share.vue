<template>
    <view class='share'>
        34242
    </view>
</template>

<script>
	export default { 
		data() {
			return { 

            }
        },
        create(){
           
        },
        methods: {  
        },
        onLoad (query) {
            // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
            const scene = decodeURIComponent(query.scene)
            console.log(scene);
        }
	}
</script>

<style lang="less" scoped> 
    .share { 
        width: 100%; 
        background: #fff;  
    } 
</style>
