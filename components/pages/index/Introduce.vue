<template>
    <view class='Introduce'>
        <text class='title'>我</text>
        <view class='techBox'>
            <text class='name textCon'>姓名：娜娜</text>
            <text class='name textCon'>出生日期：1991-03-07</text>
            <text class='phone textCon'>电话：187****1465</text>
            <text class='email textCon'>邮箱：100****362@qq.com</text>
            <text class='workYear textCon'>工作经验：6年</text>
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
        }
	}
</script>

<style lang="less" scoped> 
    .Introduce { 
        width: 100%;
        background: #fff; 
        padding: 20rpx 0 30rpx 0; 
        margin-top: 20rpx;
        .title {
            display: inline-block;
            text-align: center;
            color:#333;
            width: 100%; 
            font-size: 36rpx;
            margin-bottom: 24rpx;
            font-weight: bold;
        }
        .techBox {
            padding: 20rpx;
            .textCon {
                display: block;
                font-size: 28rpx;
                margin-bottom: 20rpx;
                color: #333;

            }
        }
    } 
</style>
