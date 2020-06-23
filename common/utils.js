export let isNullOrEmpty = (c) => {
	return(c === null || c === "" || c === undefined || c === "undefined") ? true : false
};

export const isEmptyObject = (obj) => { //是否空对象
    let name;
    for (name in obj) {
        return false;
    }
    return true;
}

export const isString = (o) => { //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

export const isNumber = (o) => { //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

export const isObj = (o) => { //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

export const isArray = (o) => { //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

export const isDate = (o) => { //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

export const isBoolean = (o) => { //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

export const isFunction = (o) => { //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

export const isNull = (o) => { //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

export const isUndefined = (o) => { //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

export const checkStr = (str, type) => {
    switch (type) {
        case 'phone': //手机号码
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel': //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card': //身份证
            return /^\d{15}|\d{18}$/.test(str);
        case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal': //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ': //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email': //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money': //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL': //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP': //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date': //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number': //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower': //小写
            return /^[a-z]+$/.test(str);
        case 'upper': //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML': //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
}

export let convertDate = (dateObj) => { 
    let date = dateObj.date, today = dateObj.today, isReturnWeek = dateObj.isReturnWeek;
    if (!today) {
        let newDate = new Date()
        today=[newDate.getFullYear(),newDate.getMonth(),newDate.getDate()]
    }
    if (date[0] == today[0] && date[1] == today[1]+1 && date[2] == today[2]) {
        return `今天 ${date[1]}月${date[2]}日`
    }else if (date[0] == today[0] && date[1] == today[1]+1 && date[2]+1 == today[2]) {
        return `昨天 ${date[1]}月${date[2]}日`
    }else {
        if(isReturnWeek){ 
            --date[1];
            var dt = new Date(...date); 
            let weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            let week = weekDay[dt.getDay()];  
            return `${week} ${++date[1]}月${date[2]}日`
        } else {
            return `${date[1]}月${date[2]}日`
        } 
    }
}

/**
 *  去除左右空格
 *  @param {string} val   
*/
export const trim = (val) => {
    return val.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 *  字符串指定位置添加字符
 *  @param {string} stringVal   //原字符串
 *  @param {number} start       //要添加的位置
 *  @param {string} stringVal   //要添加的字符串
*/
export const spliceOfString  = (stringVal, start, newStr) => { 
    return stringVal.slice(0, start) + newStr + stringVal.slice(start);
}

/**
 *  将秒数转为时分秒格式 （123123秒  ==> 00:00:00）
 *  @param {string} value   
*/
export const secondFormat = (value) => { 
    let result = parseInt(value)
    let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
    let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
    let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
 
    let time = `${h}:${m}:${s}`;  
    return time;
}

/**
 * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
 * @param {Object} attr 排序的属性
 * @param {Object} rev true为升序 false是降序
 */
export const sortBy = (attr,rev)=>{
    //第二个参数没有传递 默认升序排列
    if(rev ==  undefined){
        rev = 1;
    }else{
        rev = (rev) ? 1 : -1;
    }
    
    return (a,b)=>{
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}

export let toast = {
	success:(message = '操作成功',duration = 2000)=>{
		uni.showToast({ 
			title: message,
            image: '/static/toastSuccess.png',
			duration: duration
		});
	},
	error:(message = '网络繁忙',duration = 3000)=>{
		uni.showToast({
			title: message, 
            icon:'none',
			duration: duration
		});
	},
	info:(message = '网络繁忙',duration = 3000,icon = 'none')=>{
		uni.showToast({
			title: message,
			icon:icon,
			duration: duration
		});
	}
}

export let modal = {
	errorBack : (config={}) => {
		uni.showModal({
            title:config.title || '',
            content:config.content || '系统异常, 请返回重试',
			showCancel:false,
			success: function (res) {
				if (res.confirm) {
					routerer.backPage()
				} else if (res.cancel) {}
			}
		});
	},
	confirm:async (config={})=>{
        try {
            let modal = {
                title:config.title || '',
                content:config.content || '内容',
                showCancel:config.showCancel || false,
                confirmText:config.confirmText || '确定'
            }
            if (config.showCancel) {
                modal.cancelText = config.cancelText || '取消'
            }
            if (config.confirm || config.cancel) {
                modal.success = (res) => {
                    if (res.confirm) {
                        config.confirm()
                    }
                    if (config.showCancel) {
                        if (!res.confirm) {
                            config.cancel()
                        }
                    }
                }
            }
            if (config.confirm || config.cancel) {
                uni.showModal(modal)
            } else {
                let [error, res] = await uni.showModal(modal)
                if (res && res.errMsg == 'showModal:ok') {
                    return true
                }else{
                    console.error('modal confirm error :>> ', error);
                    toast.error('操作失败！')
                    return false
                }
            }
        } catch (error) {
            console.error('confirm error :>> ', error);
            toast.error('操作失败！')
        }
	}
}
import store from '../store/index'
export let routerer = {
    initConfig:(config) => {
        let configObj = {
            url:config.url,
            animationType:config.animationType || 'pop-in',
            animationDuration:config.animationDuration || 200,
        }
        if (config.success) {
            configObj.success = config.success
		}
		if (config.fail) {
			configObj.fail = (data) => {
				config.fail(data)
				toast.error('操作失败！')
			}
		}
		// if (config.success || config.fail) {
		// 	configObj.complete = () => {
		// 		store.dispatch('setSinglePageProcessAction',false)
		// 	}
		// }

        return configObj
    },

    goPage:async(navigate,config={}) => {
        try {
            let goPageType = {navigateTo:1,redirectTo:1,reLaunch:1,switchTab:1}
            if (!goPageType[navigate]) {
                toast.error('检查跳转类型！')
                return
            }
            // if (store.state.Counter.singlePageProcess) {
            //     return
            // }
            if (config.pageDataVuex) {//临时传参
                store.dispatch('setPageDataVuexAction',config.pageDataVuex)
            }
            // store.dispatch('setSinglePageProcessAction',true)
            let configObj = routerer.initConfig(config)
            if (configObj.success || configObj.fail) {
                uni[navigate](configObj)
            } else {
                let [error, res] = await uni[navigate](configObj);
                // store.dispatch('setSinglePageProcessAction',false)
                if (res && res.errMsg == navigate+':ok') {
                    return true
                }else{
                    console.error('routerer goPage error :>> ', error);
                    toast.error('操作失败！')
                    return false
                }
            }
        } catch (error) {
            console.error('goPage error :>> ', error);
            toast.error('操作失败！')
            // store.dispatch('setSinglePageProcessAction',false)
            
            if (config.pageDataVuex) {
                store.dispatch('setPageDataNoneAction')
            }
        }
    },
    backPage:async (config={}) => {
        try {
            // if (store.state.Counter.singlePageProcess) {
            //     return
            // }
            // store.dispatch('setSinglePageProcessAction',true)
            let configObj = {
                delta:config.delta || 1,
                animationType:config.animationType || 'pop-out',
                animationDuration:config.animationDuration || 200,
            }
            let [error, res] = await uni.navigateBack(configObj);
            // store.dispatch('setSinglePageProcessAction',false)
            if (res && res.errMsg == 'navigateBack:ok') {
                return true
            }else{
                console.error('routerer backPage error :>> ', error);
                toast.error('操作失败！')
                return false
            }
        } catch (error) {
            console.error('backPage error :>> ', error);
            toast.error('操作失败！')
            // store.dispatch('setSinglePageProcessAction',false)
        }
    }
}
export let media = { 
    choseImage: (config = {}) => { 
        try { 
            uni.chooseImage({
                count: config.count || 9, //默认9
                sizeType: config.sizeType || ['compressed'], //可以指定是原图还是压缩图，默认压缩
                sourceType: config.chooseImageType,
                success: (res) => {  
                    if(res.errMsg != 'chooseImage:ok'){
                        toast.error('操作失败！')
                    }  
                    if(config.successFn){
                        config.successFn({
                            tempFilePaths: res.tempFilePaths,
                            tempFiles: res.tempFiles
                        })
                    }
                },
                fail: (err) => { 
                    // toast.error('操作失败！')
                } 
            }); 
        } catch (err){
            uni.getSetting({
                success: async (res) => {
                    let authStatus = false;
                    switch (config.chooseImageType) {
                        case 0:
                            authStatus = res.authSetting['scope.camera'];
                            break;
                        case 1:
                            authStatus = res.authSetting['scope.album'];
                            break;
                        case 2:
                            authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
                            break;
                        default:
                            break;
                    }
                    if (!authStatus) {
                        let result = await this.$modal.confirm({
                            title: '授权失败',
                            content: '需要从您的相机或相册获取图片，请在设置界面打开相关权限',
                        })
                        if (result) {
                            uni.openSetting()
                        }
                    }
                }
            })
            // toast.error(err || '操作失败！')
        } 
    },
    showActionSheet: (config = {}) => {
        try {
            uni.showActionSheet({
                title:'标题',
                itemList: ['拍照', '从相册选择'],
                success: (e) => {  
                    if (e.tapIndex) {
                        config.chooseImageType = ['album']
                    } else {
                        config.chooseImageType = ['camera']
                    }
                    media.choseImage(config)
                }
            })
        } catch (err){
            toast.error(err || '操作失败！')
        } 
    },
    previewImage: (idx = 0, list = [],loop=true)=> {
        try {
            uni.previewImage({
                current: list[idx],
                urls: list.map(item => item),
                indicator:'default',
                loop:loop,
                fail:(e)=>{
                    toast.error('操作失败！')
                    console.error('previewImage e :>> ', e);
                }
            })
        } catch (err){
            toast.error(err || '操作失败！')
            console.error('previewImage err :>> ', err);
        } 
    }
}

// dom元素操作(仅限页面中使用，模块中测试的无效)
export let domOperate = {
    // 获取dom元素宽高信息
    getDomSize: (className)=>{ 
        return new Promise((res, rej) => {
            uni.createSelectorQuery().select('.' + className).fields({
                size: true,
                scrollOffset: true
            }, (data) => {
                res(data);
            }).exec();
        });
    }
}

export let getDifficulty = (val) => {
    let titleName;
    if (0.01 <= val && val <= 0.49) {
        titleName = "能力拓展";
    } else if (0.50 <= val && val <= 0.74) {
        titleName = "进阶提高";
    } else if (0.75 <= val && val <= 1){
        titleName = "基础巩固";
    }
    return titleName
}