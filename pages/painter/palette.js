export default class Palette {
    constructor (headImage,nmae,qrcode) {
        this.headImage = headImage
        this.qrcode = qrcode
        this.name = nmae
    }
    palette2 () {
        return ({
            width:'592rpx',
            height:'960rpx',
            background: '#FFFFFF',
            borderRadius:'20rpx',
            views:[
                {
                    type: 'text',
                    text: '扫一扫二维码，了解一个前端程序员的世界',
                    css: {
                        width:'308rpx',
                        height:'80rpx',
                        left:'196rpx',
                        top: '116rpx',
                        fontSize: '28rpx',
                        color:'#888888'
                    },
                }, 
                {
                    type: 'image',
                    url: '/static/share/share.png',
                    css: {
                        width:'400rpx',
                        height:'400rpx',
                        top: '330rpx',
                        left:'84rpx',
                        mode:'aspectFill'
                    },
                } 
            ]
        })
    }
}