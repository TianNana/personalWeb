<template>
    <view class='share'>
        <image class='codeImg' src='/static/share/shareImg.png' mode= 'widthFix'></image>
        <text class='describe'>我是一名前端工程师，分享让更多人了解我吧</text>
        <view class='btArea'>  
            <button open-type="share" class='shareWX shareButton'>
                <image src='/static/share/shareWX.png' mode="widthFix"></image>
                <text>微信</text>
            </button> 
            <view class='shareWX'  @tap="setPainter">
                <image src='/static/share/download.png' mode="widthFix"></image>
                <text>相册</text>
            </view>  
        </view>
        <painter class="painter"
            @imgOK="onImgOk"
            @imgErr="onImgErr"
            customStyle="position: absolute; left: -9999rpx;"
            :palette="template"
            v-if="isPainter"
        />
    </view>
</template>

<script>
import shareWXMixins from '@/public/shareWXMixins';
import Palette from "./palette";
	export default { 
        mixins:[shareWXMixins],
		data() {
			return { 
                template:{},
                isPainter:false,
                image:'',
            }
        },
        create(){
           
        },
        watch: {
            image (newV) {
                if (newV) {
                    this.saveImageToPhotosAlbum (newV)
                }
            },
        },
        methods: {  
            setPainter () { 
                this.template=new Palette().palette2()
                this.isPainter = true
            },
            async saveImageToPhotosAlbum (filePath) {
                let [error, res] = await uni.saveImageToPhotosAlbum({
                    filePath: filePath,
                });
                if (res && res.errMsg == 'saveImageToPhotosAlbum:ok') {
                    this.$toast.success('保存成功')
                }else{
                    console.log('saveImageToPhotosAlbum error :>> ', error);
                    this.$toast.error('保存失败，点击右上角查看“设置”是否允许保存图片',4000)
                }
                this.isPainter = false//隐藏painter
            },
            onImgOk (e){
                console.log('onImgOk :>> ', e);
                this.image = e.detail.path
            },
			onImgErr (e){
                console.log('onImgErr :>> ', e);
            },
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
        min-height: 100%;
        background: #fff;
        display: flex;
        flex-wrap:wrap;
        flex-direction: column;
        align-items: center;
        .con {
            border:1px solid #f5f5f5;
        }
        .codeImg {
            width: 100%;  
            margin-top: 20rpx;

        }
        .describe {
            color: #888888;
            font-size: 28rpx; 
            margin: 100rpx 0 50rpx 0;

        }
        .btArea {
            display: flex;
            justify-content: space-between;
            width: 80%;
            .shareButton{
                padding: 0;
                margin: 0;
                line-height: normal;
                border-radius: 0;
            }
            .shareButton::after{
                border: none;
            }
            .shareWX {
                display: flex;
                align-items: center;
                flex-direction: column;
                color: #02B095;
                width: 50%;
                outline: 0 none;
                background-color: #FFF;

                image{
                    width: 62rpx;
                }
                text {
                    margin-top: 8rpx;
                    font-size: 28rpx;
                }
            }
        }
    } 
</style>
