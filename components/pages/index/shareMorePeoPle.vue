<template>
    <view class='shareMorePeoPle'>
        <view class='title' @tap='goSharePage'>
            <image class='titleIcon' src='/static/index/share.png' mode= 'widthFix'></image>
            <text>让更多的人了解我吧~</text>
        </view> 
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
            goSharePage(){
                this.$routerer.goPage('navigateTo',{
                    url:'/pages/painter/painter' 
                })
            }
        }
	}
</script>

<style lang="less" scoped> 
    .shareMorePeoPle { 
        width: 100%; 
        background: #fff; 
        padding: 20rpx 0 30rpx 0; 
        margin-top: 20rpx;
        .title {
            display: inline-block;
            color:#333;
            width: 100%; 
            font-size: 36rpx;
            margin-bottom: 24rpx;
            padding-left: 20rpx;
            display: flex;
            align-items: center; 
            .titleIcon {
                width: 60rpx;
            }
        } 
    } 
</style>
