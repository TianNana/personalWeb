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
            title: this.textShareWXMixins ? this.textShareWXMixins : "想了解前端程序媛的世界吗？",
            path: this.pathShareWXMixins?this.pathShareWXMixins:'/pages/tabBar/index/index',
            imageUrl:this.imageShareWXMixins ? this.imageShareWXMixins : '/static/logoShare.png',
        }
        return obj
    },
}
export default shareWXMixins