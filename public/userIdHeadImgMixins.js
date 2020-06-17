import requestConfig from "../server/requestConfig"

let userIdHeadImgMixins = {
    data() {
        return {
            userIdHeadImgData:'',
        }
    },
    computed:{
        userIdHeadImgComputed2 () {
            return (studentUserId) => {
                // return '/static/mymessage/titlePhoto.png'
                return this.userIdHeadImgMethods(studentUserId)
            }
        },
        userIdHeadImgComputed () {
            return (userId) => {
                if (userId) {
                    return `${requestConfig.baseURL}qxfile/qxcloud/userphoto/${userId.substring(0,1)}/${userId}.png@small`
                } else {
                    return '/static/noHeadPhoto.png'
                }
            }
        },
    },
    methods: {
        userIdHeadImgOnErron (img='userIdHeadImgData') {
            this[img] = '/static/noHeadPhoto.png';
            this.userIdHeadImgData = '/static/noHeadPhoto.png';
        },
        userIdHeadImgMethods (userId) {
            if (userId) {
                return `${requestConfig.baseURL}qxfile/qxcloud/userphoto/${userId.substring(0,1)}/${userId}.png@small`
            } else {
                return '/static/noHeadPhoto.png'
            }
        },
    },
}
export default userIdHeadImgMixins