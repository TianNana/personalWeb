const state = {
    singlePageProcess:false,//打开页面节流
    hasLogin: false,//是否已经登录 (已学生token是否获取为依据)
    userInfo:{//家长信息
        // avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJcd69xOiaDZ2t3gYDvEAPtXrZuoEaQiaRQzBkN5icBay7stwnRpesBHnXwBby7U3Zz7QGF43COemc2Q/132"
        // city: "Changping"
        // country: "China"
        // encryptedData: ""
        // gender: 1
        // iv: ""
        // language: ""
        // nickName: ""
        // openid: ""
        // province: ""
        // session_key: "="
        // signature: ""
        // userFamilyList: [{//孩子列表
        //     userId (string, optional): 孩子用户id ,
        //     qxNumber (integer, optional): 未来号 ,
        //     realName (string, optional): 姓名 ,
        //     token (string, optional): 孩子token
        // }]
        // userId: ""
    },//家长用户数据
    iconList: [],// 后台返回的Icon列表
    showBar: true,//是否显示tabBar
    currentStudent:{//当前孩子信息
        // userId (string, optional): 孩子用户id ,
        // qxNumber (integer, optional): 未来号 ,
        // realName (string, optional): 姓名 ,
        // token (string, optional): 孩子token,
        // headImage:'',头像 
        // loginName: //登录名 ,用户名 
        // cardtype: //证件类型(1=学生证,2=身份证,3=户口本,4=军官证,5=驾驶证,6=其他) ,
        // cardnum: //证件号码 ,
        // birthday: //出生日期 ,
        // sex: //性别(1=男;2=女;3=未知)
        // mobile: //手机号
        // className: //班级
        // userIdentity: //用户身份(userIdentity几位从前到后分别代表：学生、老师、家长、管理员、机构人员) 
        // classId: //classId
        // studentId: //studentId
    },
    familyList:[
        // userId (string, optional): 用户id ,
        // realName (string, optional): 姓名 ,
        // relation (string, optional): 关系(1=父亲;2=母亲;3=其他监护人),
        // createTime (string, optional): 创建时间
    ],//家长列表
    windowSize:{},//屏幕宽高
    pageDataVuex:{},//页面传参过长时，临时中转
    currentStudentUserId:null,//当前孩子的userId,
    currentStudentHeadImage:null,//当前孩子的headImage,
    sceneStudentUserId:null,//二维码或小程序链接带参进入小程序（参数为学生userId）
    logConfig:false,//是否显示日志组件
}

const mutations = {
    setSinglePageProcess(state,process){
        state.singlePageProcess = process
    },
    setWindowSize(state,process){
        state.windowSize = process
    },
    setUserInfo(state,process={}){
        for (const key in process) {
            if (process.hasOwnProperty(key)) {
                state.userInfo[key] = process[key]
                if (key == 'userId') {
                    uni.setStorage({
                        key: 'userId',
                        data: process[key],
                    });
                    // state.hasLogin = true
                }
                // if (key == 'userFamilyList' && process[key].length > 0) {
                //     state.currentStudent = process[key][0]
                // }
            }
        }
    },
    setIconList(state,list){
        state.iconList = list
    },
    setShowBar(state,showBar){
        state.showBar = showBar
    },
    setCurrentStudent(state,currentStudent){
        for (const key in currentStudent) {
            if (currentStudent.hasOwnProperty(key)) {
                state.currentStudent[key] = currentStudent[key]
                if (key == 'userId') {
                    uni.setStorage({
                        key: 'studentUserId',
                        data: currentStudent[key],
                    });
                    if (!state.currentStudent.headImage) {
                        state.currentStudent.headImage = ''
                    }
                    state.currentStudentUserId = currentStudent[key]
                }
                if (key == 'token') {
                    state.hasLogin = true
                }
                if (key == 'headImage') {
                    state.currentStudentHeadImage = currentStudent[key]
                }
            }
        }
    },
    setFamilyList(state,familyList){
        state.familyList = familyList
    },
    setHasLogin(state,hasLogin){
        state.hasLogin = hasLogin
    },
    setPageDataVuex(state,pageDataVuex){
        state.pageDataVuex = pageDataVuex
    },
    setSceneStudentUserId(state,sceneStudentUserId){
        state.sceneStudentUserId = sceneStudentUserId
    },
    setLogConfig(state,logConfig){
        state.logConfig = logConfig
    },
}

const actions = {
    setSinglePageProcessAction({commit},process){
        commit('setSinglePageProcess' , process)
    },
    setWindowSizeAction({commit},process){
        commit('setWindowSize' , process)
    },
    setUserInfoAction({commit},process){
        commit('setUserInfo' , process)
    },
    setIconListAction({commit},list){
        commit('setIconList' , list)
    },
    setShowBarAction({commit},showBar){
        commit('setShowBar' , showBar)
    },
    setCurrentStudentAction({commit},currentStudent){
        commit('setCurrentStudent' , currentStudent)
    },
    setFamilyListAction({commit},familyList){
        commit('setFamilyList' , familyList)
    },
    setHasLoginAction({commit},hasLogin){
        commit('setHasLogin' , hasLogin)
    },
    setPageDataVuexAction({commit},pageDataVuex){
        commit('setPageDataVuex' , pageDataVuex)
    },
    setPageDataNoneAction({commit}){
        commit('setPageDataVuex' , {})
    },
    setSceneStudentUserIdAction({commit},sceneStudentUserId){
        commit('setSceneStudentUserId' , sceneStudentUserId)
    },
    setLogConfigAction({commit},logConfig){
        commit('setLogConfig' , logConfig)
    },
}

const getters = {
    getIsLogin (state) {
        return state.hasLogin
    },
    getSinglePageProcess (state) {
        return state.singlePageProcess
    },
    getUserInfo (state) {
        return state.userInfo
    },
    getIconList(state) {
        return state.iconList;
    },
    getShowBar(state) {
        return state.showBar;
    },
    getCurrentStudent(state) {
        return state.currentStudent;
    },
    getFamilyList(state) {
        return state.familyList;
    },
    getWindowSize(state) {
        return state.windowSize;
    },
    getHasLogin (state) {
        return state.hasLogin
    },
    getPageDataVuex (state) {
        return state.pageDataVuex
    },
    getCurrentStudentUserId (state) {
        return state.currentStudentUserId
    },
    getCurrentStudentHeadImage (state) {
        return state.currentStudentHeadImage
    },
    getSceneStudentUserId (state) {
        return state.sceneStudentUserId
    },
    getLogConfig (state) {
        return state.logConfig
    },
}

export default {
	getters,
	state,
	mutations,
	actions,
}
