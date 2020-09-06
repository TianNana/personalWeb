<template>
    <view class='Introduce'>
        <text class='title'>个人资料</text>
        <view class='techBox'>
            <text class='name textCon'>姓名：娜娜</text>
            <text class='name textCon'>出生日期：1991-03-07</text>
            <text class='phone textCon'>电话：18730301465</text>
            <text class='email textCon'>邮箱：tianyana187@163.com</text>
            <text class='workYear textCon'>工作经验：5年前端+2年UI</text>
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
            padding-left: 20rpx;
            border-bottom: 1rpx dashed #f2f2f2;
            padding-bottom: 24rpx;

        }
        .techBox {
            padding: 20rpx 30rpx;
            .textCon {
                display: block;
                font-size: 28rpx;
                margin-bottom: 20rpx;
                color: #333;

            }
        }
    } 
</style>
