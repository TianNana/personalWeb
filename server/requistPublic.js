import {request, uploadFile} from './request.js'
import store from '../store/index.js';
// import { version } from '../public/publicLet.js';
import packageJson from '../package.json'

export let requestPromise = async () => {
    let response = await request({
        url:'userloginuser/loginClassroom.rest',
        data:{
            loginName: '100101003',
            password: '12345678'
        }
    })
    return response
}
//小程序登录,通过js_code换 session_key+openid+unionid
export let jscode2session = async(jsCode) => {
    let response = await request({
        url:'userloginuser/jscode2session.rest',
        data:{
            jsCode: jsCode,
        }
    })
    return response
}
//微信用户注册
export let regFamily = async() => {
    let response = await request({
        url:'userloginuser/regFamily.rest',
        data:{
            "openid": store.state.Counter.userInfo.openid || "",
            "session_key": store.state.Counter.userInfo.session_key || "",
            "gender": store.state.Counter.userInfo.gender || 2,
            "nickName": store.state.Counter.userInfo.nickName || "",
            "encryptedData": store.state.Counter.userInfo.encryptedData || "",
            "iv": store.state.Counter.userInfo.iv || "",
            "version":packageJson.version || '1.0.0'
        }
    })
    return response
}

export let uploadFileFun = async(config={}) => {
    let response = await uploadFile({
        filePath:config.filePath,
        name: filePath.file,
        fileType:filePath.image,
    })
    return response
}

//微信用户注册
export let getWxIconList = async(version) => {
    let response = await request({
        url:'auth/getWxIconList.rest',
        data:{
            "version": version || packageJson.version || "1.0.0",
        },
        method:'GET'
    })
    return response
}
//微课 -我添加的课本
export let queryMyCourseEnrolledPage = async(config={},callback) => {
    let response = await request({
        url:'myCourseEnrolled/queryMyCourseEnrolledPage.rest',
        data:{
            // type:config.type,
            "userId":config.userId || store.state.Counter.currentStudent.userId,
            "curpage":config.curpage,
            "pagesize":config.pagesize,
        },
    },callback)
    return response
}
//微课 -我的学习时长
export let learningTime = async(config={},callback) => {
    let date = new Date()
    let response = await request({
        url:'myLearningRecords/learningTime.rest',
        data:{
            "createTimeStart": config.createTimeStart || date.getFullYear()+'-'+(date.getMonth()-0+1)+'-'+date.getDay()+" 00:00:00",
            "createTimeEnd": config.createTimeEnd || date.getFullYear()+'-'+(date.getMonth()-0+1)+'-'+date.getDay()+" 23:59:59",
            "userId": config.userId || store.state.Counter.currentStudent.userId,
        },
    },callback)
    return response
}
//微信_通过家长userId返回孩子列表
export let queryMychildList = async(config={},callback) => {
    let response = await request({
        url:'userloginuser/queryMychildList.rest',
        data:{
            "familyUserId": config.userId || store.state.Counter.userInfo.userId,
            "version": packageJson.version || "1.0.0",
        },
    },callback)
    return response
}
//微信_获取孩子的家长列表
export let getfamilyByStuId = async(config={},callback) => {
    let response = await request({
        url:'userfamily/getfamilyByStuId.rest',
    },callback)
    return response
}
//微信_我的个人信息
export let getUserBasicinfoByToken_weixin = async(config={},callback) => {
    let response = await request({
        url:'userbasicinfo/getUserBasicinfoByToken_weixin.rest',
        isLoading:config.isLoading || true
    },callback)
    return response
}
//微信_是否有资格显示log
export let getLogConfig = async(config={},callback) => {
    let response = await request({
        url:'auth/getLogConfig.rest',
        data:{
            userId: config.userId || store.state.Counter.userInfo.userId,
        },
        method:'GET',
    },callback)
    return response
}
//微信 --绑定家长 (输入学生用户id 家长用户id 与家长的关系)
export let bindingFamily = async(config={},callback) => {
    let response = await request({
        url:'userfamily/bindingFamily.rest',
        data:{
            stuUserid: config.stuUserid || store.state.Counter.currentStudent.userId,
            familyUserid: config.familyUserid || store.state.Counter.userInfo.userId,
            relation: config.relation || 0,
        }
    },callback)
    return response
}
//通过手机号注册家长，并返回家长id
export let insertFamily = async(config={},callback) => {
    let response = await request({
        url:'userfamily/insertFamily.rest',
        data:{
            mobile : config.mobile,
        }
    },callback)
    return response
}
//微信 --更新头像
export let uploadHeadImg = async(config={}) => {
    let response = await uploadFile({
        url:'userbasicinfo/upload.rest?userId='+store.state.Counter.currentStudent.userId,
        filePath:config.filePath,
        name: config.name || 'uploadFile',
    })
    return response
}
//微信家长学生端-查询课堂列表
export let recordClassroomList = async(config={},callback) => {
    let data = {
        classId : config.classId || store.state.Counter.currentStudent.classId,
        studentId : config.studentId || store.state.Counter.currentStudent.studentId,
    }
    if (config.subjectId) {
        data.subjectId = config.subjectId
    }
    if (config.endTime) {
        data.endTime = config.endTime
    }
    if (config.startTime) {
        data.startTime = config.startTime
    }
    let response = await request({
        url:'classroom/info/wechat-parent/classroom-list',
        data:data,
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//我的课堂-查询课堂学科列表
export let recordClassroomSubject = async(config={},callback) => {
    let response = await request({
        url:'classroom/info/student/classroom-subject',
        data:{
            classId : config.classId || store.state.Counter.currentStudent.classId,
            studentId : config.studentId || store.state.Counter.currentStudent.studentId,
        },
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//微信家长学生端-查询课堂日期列表
export let recordClassroomDate = async(config={},callback) => {
    let data = {
        classId : config.classId || store.state.Counter.currentStudent.classId,
    }
    if (config.subjectId) {
        data.subjectId = config.subjectId
    }
    if (config.month) {
        data.month = config.month
    }
    let response = await request({
        url:'classroom/info/wechat-parent/classroom-date',
        data:data,
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//微信获取二维码
export let getUnlimitedCode = async(config={},callback) => {
    let response = await request({
        url:'auth/getUnlimitedCode.rest',
        data:{
            scene : config.scene || store.state.Counter.currentStudent.userId,
            page : config.page || 'pages/tabBar/index/index',
        },
        method:'GET'
    },callback)
    return response
}
//检查二维码是否获取
export let checkUnlimitedCode = async(config={},callback) => {
    let response = await request({
        url:'auth/checkUnlimitedCode.rest',
        data:{
            scene : config.scene || store.state.Counter.currentStudent.userId,
        },
        method:'GET'
    },callback)
    return response
}
//检查二维码是否获取
export let getCodeForStudentUserId = async(config={},callback) => {
    let response = await request({
        url:'auth/getCode.rest',
        data:{
            scene : config.userId || store.state.Counter.currentStudent.userId,
        },
        method:'GET'
    },callback)
    return response
}
//微信家长学生端-手写解答
export let getRecordPictureAnswerList = async(config={},callback) => {
    let response = await request({
        url:'classroom/info/wechat-parent/picture-answer-list',
        data:{
            classroomId : config.classroomId,
            studentId : config.studentId,
        },
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//微信家长学生端-查询课堂详情
export let getRecordClassroomDetail = async(config={},callback) => {
    let response = await request({
        url:'classroom/info/wechat-parent/classroom-detail',
        data:{
            classroomId : config.classroomId,
            studentId : config.studentId,
        },
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//微信家长学生端-查询课堂习题
export let getRecordClassroomQuestion = async(config={},callback) => {
    let response = await request({
        url:'classroom/info/wechat-parent/classroom-question',
        data:{
            classroomId : config.classroomId,
            studentId : config.studentId,
            size : config.size || 3,
        },
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//微信家长学生端-点评详情
export let getRecordCommentDetail = async(config={},callback) => {
    let response = await request({
        url:'classroom/info/wechat-parent/comment-detail',
        data:{
            classroomId : config.classroomId,
            studentId : config.studentId,
        },
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
//微信家长学生端-9=课件批注/10=黑板书写
export let getRecordImageList = async(config={},callback) => {
    let data = {
        classroomId : config.classroomId,
    }
    if (config.eventType) {
        data.eventType = config.eventType
    }
    let response = await request({
        url:'classroom/info/wechat-parent/images-list',
        data:data,
        method:'GET',
        mode:'api3'
    },callback)
    return response
}
 
 
//线下作业列表 
export let getOfflineWorkList = async(config) => { 
    let response = await request({
        url:'workstud/getStudWorkList.rest',
        data:{
            curpage: config.curpage,
            pagesize: config.pagesize || 10,
            homeworkType: config.homeworkType,
        }
    })   
    return response 
}

//获取线下作业内容
export let getOfflineWorkCon = async(teachHomeworkId) => { 
    let response = await request({
        url:'workteach/getWorkTeachHomeworkDetail.rest',
        data:{
            teachHomeworkId: teachHomeworkId, 
        }
    })   
    return response 
}

//学生提交作业
export let studWorkBatchSubmit = async(data) => { 
    let response = await request({
        url:'workstud/studWorkBatchSubmit.rest',
        data:data
    })   
    return response 
}

//上传学生作业图片 
export let uploadStudWork = async(obj) => { 
    let response = await uploadFile({
        url:'uploadfile/upload.rest', 
        filePath: obj.tempFilePaths
    })   
    return response 
}

//获取学生线下作业详情
export let getStudUnderLineWorkDetail = async(teachHomeworkId) => { 
    let response = await request({
        url:'workstud/queryStudUnderLineWorkDetail.rest',
        data:{
            homeworkId: teachHomeworkId, 
        }
    })   
    return response 
}

//获取首页动态消息
export let getDynamicMessage = async(config={},callback) => { 
    let response = await request({
        url :'dynamicmessage/queryDynamicMessagePage.rest',
        data:{
            curpage: config.curpage, 
            pagesize: config.pagesize || 10,
            isRead: config.isRead
        }
    },callback)
    return response 
} 

//获取首页话题消息
export let getTopicsList = async() => { 
    let response = await request({
        url :'dynamicmessage/getTopicsList.rest', 
    })   
    return response 
} 

//首页动态消息点击后标记状态
export let setMessageState = async(config) => { 
    let response = await request({
        url :'dynamicmessage/messageStateSetting.rest', 
        data:{
            messageId: config.messageId,
        }
    })   
    return response 
} 

//课堂表现 - 习题列表 - 查询习题列表
export let getClassroomQuestion = async (config={}) => {
    let response = await request({
        url:'classroom/info/wechat-parent/classroom-question',
        data: {
            classroomId : config.classroomId, 
            studentId : config.studentId, 
            size: config.size || -1
        },
        method:'GET',
        mode:'api3'
    }) 
    return response
}

//课堂表现 - 习题排名 - 查询习题排名
export let getClassroomQuestionRank = async (config={}) => {
    let response = await request({
        url:'classroom/info/wechat-parent/classroom-question-rank',
        data:{
            classroomId : config.classroomId,
        },
        method:'GET',
        mode:'api3'
    })
    return response
} 

//课堂表现 - 习题列表 - 习题详情
export let getClassroomQuestionDetail = async (config={}) => {
    let response = await request({
        url:'classroom/info/student/classroom-question-detail',
        data:{
            interactQuestionId : config.interactQuestionId,
            studentId : config.studentId,
        },
        method:'GET',
        mode:'api3'
    }) 
    return response
} 

//课堂表现 - 微课回放 -  查询列表
export let getMicrocourseList = async (config={}) => {
    let response = await request({
        url:'classroom/info/event/microcourse-list',
        data:{
            classroomId : config.classroomId
        },
        method:'GET',
        mode:'api3'
    }) 
    return response
} 

//课堂表现 - 微课回放 -  获取播放地址
export let getVodPlayDownloadInfo = async (config={}) => {
    let response = await request({
        url:'baidudoccontroller/getVodPlayDownloadInfo.rest',
        data:{
            itemId : config.itemId
        }, 
        mode:'api2'
    }) 
    return response
} 

//通过用户名密码验证身份
export let loginLs = async(config={}) => {
    let response = await request({
        url:'userloginuser/loginLs.rest',
        data:{
            loginName : config.loginName,
            password : config.password,
        }
    })
    return response
}

//绑定学生 (输入用户名 密码 与家长的关系)
export let bindingStudent = async(config={}) => {
    let response = await request({
        url:'userloginuser/bindingStudent.rest',
        data:{
            loginName : config.loginName,
            password : config.password,
            relation : config.relation,
            userId : store.state.Counter.userInfo.userId,
        },
        header:{
            token:''
        }
    })
    return response
}
