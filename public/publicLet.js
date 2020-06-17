// export const isProductionPlatform = process.env.NODE_ENV === 'production';//区分 发布生产 与 内部测试开发 环境 //开发专用
export const isProductionPlatform = false;//区分 发布生产 与 内部测试开发 环境 //开发专用
// export const version = '1.0.2';//版本號 //暂停使用，使用package.json里的
export const workBoardSize = {//作业板子坐标范围尺寸elLoadingMask
    width:21000,
    height:29700
}
export const statusHeight = 44; //自定义头部状态栏高度
// 类型数据
export const baseData = {
    worktype:{
        '1':'线下作业',
        '2':'课堂表现',
        '3':'成绩发布'
    },
    subject:{ 
        "14": "数学",
        "18": "语文",
        "19": "英语",
        "40": "生物",
        "44": "历史",
        "50": "地理",
        "53": "政治",
        "59": "科学",
        "61": "历史与社会",
        "64": "物理",
        "67": "化学",
        "329": "品德与生活",
        "330": "品德与社会",
        "331": "音乐",
        "332": "美术",
        "335": "信息技术",
        "336": "生命·生态·安全",
        "342": "道德与法治",
        "357": "体育与健康",
        "359": "艺术",
        "370": "通用技术",
        "399": "书法",
    },
    subjectType: {
        "1": "单选题",
        "2": "多选题",
        "3": "判断题",
        "4": "填空题",
        "5": "连线题",
        "6": "简答题",
        "7": "综合题",
        "8": "完型填空",
    },
    subjectToColor:{
        "14":"#FAE56F",
        "18":"#80C0E2",
        "19":"#E96155",
        "40":"#6AC37A",
        "44":"#F2B849",
        "50":"#7289D6",
        "53":"#AC73F7",
        "64":"#EE9454",
        "67":"#6896F8",
    }
}
export const questionTypeTemplateSubjectiveList = [4,5,6,7] //主观题题型列表
export const questionTypeTemplateObjectiveList = [1,2,3] //客观题题型列表