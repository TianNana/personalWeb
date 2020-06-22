let shareWXMixins = {
    data(){
        return {
            textShareWXMixins:'',
            imageShareWXMixins:'',
            pathShareWXMixins:''
        }
    },
    onShareAppMessage(res) {
        let obj = {
            title: this.textShareWXMixins ? this.textShareWXMixins : "欢迎来到娜娜的秘密花园，喜欢我就来了解我吧",
            path: this.pathShareWXMixins?this.pathShareWXMixins:'/pages/tabBar/index/index',
            imageUrl:this.imageShareWXMixins ? this.imageShareWXMixins : '/static/logoShare.png',
        }
        return obj
    },
}
export default shareWXMixins