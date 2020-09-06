export default class Palette {
    constructor (headImage,nmae,qrcode) {
        this.headImage = headImage
        this.qrcode = qrcode
        this.name = nmae
    }
    palette2 () {
        return ({
            width:'400rpx',
            height:'400rpx',
            background: '#FFFFFF',
            borderRadius:'20rpx',
            views:[
                {
                    type: 'image',
                    url: '/static/share/share.png',
                    css: {
                        width:'400rpx',
                        height:'400rpx',
                        mode:'aspectFill'
                    },
                } 
            ]
        })
    }
}