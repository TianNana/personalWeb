<template>
    <view class='techField'>
        <text class='title'>开发领域</text>
        <view class='techBox'>
            <view v-for='item in techFieldData' :key='item.id' class='techItem' @click='goCasePage'>
                <image class='techIcon' :src='item.src'></image>
                <text class= 'techName'>{{item.name}}</text>
            </view> 
        </view> 
    </view>
</template>

<script>
	export default { 
		data() {
			return {  
                techFieldData:[{
                    id:0,
                    name:'PC端',
                    src:'/static/index/pc.png'
                },{
                    id:1,
                    name:'客户端',
                    src:'/static/index/client.png'
                },{
                    id:2,
                    name:'移动端',
                    src:'/static/index/phone.png'
                }] 
			}
        },
        create(){
           
        },
        methods: { 
            goCasePage(){
                this.$routerer.goPage('switchTab',{
                    url:'/pages/tabBar/case/case' 
                })
            }
        }
	}
</script>

<style lang="less" scoped> 
    .techField { 
        width: 100%;
        background: #fff;
        padding: 30rpx 0 50rpx 0; 
        margin-top: 20rpx;
        .title {
            display: inline-block; 
            text-align: center;
            color:#333;
            width: 100%; 
            font-size: 36rpx;
            margin-bottom: 30rpx;
            font-weight: bold; 
            padding-left: 20rpx;
            border-bottom: 1rpx dashed #f2f2f2;
            padding-bottom: 24rpx;
        }
        .techBox {
            display: flex;
            justify-content: space-around;
            .techItem {
                display: flex;
                flex-direction: column;
                align-items: center;
               .techIcon {
                   width: 80rpx;
                   height: 80rpx;
               } 
               .techName {
                    font-size: 28rpx;
                    color:#000;
                    margin-top: 10rpx;
               }
            }
        }
    } 
</style>