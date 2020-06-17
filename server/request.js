import requestConfig from './requestConfig.js'
import {toast} from '../common/utils.js'
import { isProductionPlatform } from '../public/publicLet.js';
import store from '../store/index.js';
/* 
 config = {
	 url,
	 data,
	 method,
 }
 */
let request = async (config,callback) => {
	try{
		if (config.isLoading) {
			uni.showLoading({
				title: '正在加载...',
				mask:true
			});
		}
		let baseURL = requestConfig.baseURL
		if (config.mode && config.mode == 'api2') {
			baseURL = requestConfig.baseURL2
		} else if (config.mode && config.mode == 'api3') {
			baseURL = requestConfig.baseURL3
		} else if (config.mode && config.mode == 'api4') {
			baseURL = requestConfig.baseURL4
		}
		let requestData = {
			url: baseURL + config.url.trim(),
			data: config.data || {},
			method: config.method || requestConfig.method || 'POST',
			dataType: requestConfig.dataType || 'json',
			timeout: requestConfig.timeout || '60000',
			header: requestConfig.headers || {}
        }
        if (store.state.Counter.currentStudent && store.state.Counter.currentStudent.token) {//token
            requestData.header.token = store.state.Counter.currentStudent.token
        }
        if (config.header && config.header.hasOwnProperty('token')) {
            requestData.header.token = config.header.token
        }
		if (config.success) {
			requestData.success = (data) => {
                config.success(data.data)
                if(data.data.code != 1){
                    toast.error(data.data.errorMessage || '网络繁忙，请稍后再试')
                }
                if (!isProductionPlatform) {
                    console.log(config.url+' success :>> ', {
                        response:data.data,
                        url:requestData.url,
                        data:requestData.data,
                    });
                }
            }
		}
		if (config.fail) {
			requestData.fail = (data) => {
				config.fail(data)
                toast.error('网络繁忙，请稍后再试')
                if (!isProductionPlatform) {
                    console.error(config.url+' fail :>> ', {
                        response:data,
                        url:requestData.url,
                        data:requestData.data,
                    });
                }
			}
		}
		if (config.success || config.fail) {
			requestData.complete = () => {
				if (config.isLoading) {
					uni.hideLoading();
				}
			}
		}
		if (config.success || config.fail) {
			uni.request(requestData);
		}else{
            let [error, res] = await uni.request(requestData);
            requestPromiseClearup(config,res.data,requestData,callback)
			return res.data
		}
	}catch(e){
		if (config.isLoading) {
			uni.hideLoading();
		}
		console.log('网络请求失败：',e);
		toast.error('网络请求失败！')
		if (config.success || config.fail) {
			return e
		}else{
			const p = Promise.reject(e);
			return p
		}
	}
}

let requestPromiseClearup = async(config,data,requestData,callback=()=>{}) => {
    if (config.isLoading) {
        uni.hideLoading();
    }
    if(data.code != 1){
        toast.error(data.errorMessage || '网络繁忙，请稍后再试')
    }
    // if (!isProductionPlatform) {
    //     console.log(config.url+' promise :>> ', {
    //         response:data,
    //         url:requestData.url,
    //         data:requestData.data || 'uploadFile 上传文件',
    //     });
    // }
    callback(config.url+' :>> ', {
        response:data,
        url:requestData.url,
        data:requestData.data || 'uploadFile 上传文件',
    })
}

let uploadFile = async (config) => {
    try {
        if (config.isLoading) {
			uni.showLoading({
				title: '正在加载',
				mask:true
			});
		}
		let baseURL = requestConfig.baseURL
		if (config.mode && config.mode == 'api2') {
			baseURL = requestConfig.baseURL2
		} else if (config.mode && config.mode == 'api3') {
			baseURL = requestConfig.baseURL3
		} else if (config.mode && config.mode == 'api4') {
			baseURL = requestConfig.baseURL4
		}
		let requestData = {
			url: baseURL + config.url,
        }
        if (config.filePath) {
            requestData.filePath = config.filePath
        }else{
            toast.error('filePath为空！')
            return
        }

        if (config.name) {
            requestData.name = config.name
        }else{
            requestData.name = 'file'
        }
        if (config.fileType) {
            requestData.fileType = config.fileType
        }else{
            requestData.fileType = 'image'
		}

		requestData.formData = config.formData || {};

		if (config.success) {
			requestData.success = (data) => { 
				let _data = JSON.parse(data.data);
                config.success(_data)
                if(_data.code != 1){
                    toast.error(_data.errorMessage || '网络繁忙，请稍后再试')
                }
                if (!isProductionPlatform) {
                    console.log(config.url+' success :>> ', {
                        response:_data,
                        url:requestData.url,
                    });
                }
            }
		}
		if (config.fail) {
			requestData.fail = (data) => {
				config.fail(data)
                toast.error('网络繁忙，请稍后再试')
                if (!isProductionPlatform) {
                    console.error(config.url+' fail :>> ', {
                        response:data,
                        url:requestData.url,
                    });
                }
			}
		}
		if (config.success || config.fail) {
			requestData.complete = () => {
				if (config.isLoading) {
					uni.hideLoading();
				}
			}
		}
		if (config.success || config.fail) {
			uni.uploadFile(requestData);
		}else{
            let [error, res] = await uni.uploadFile(requestData);
			requestPromiseClearup(config,JSON.parse(res.data),requestData)
			return JSON.parse(res.data)
		}
    } catch (error) {
		if (config.isLoading) {
			uni.hideLoading();
		}
		console.log('网络请求失败：',e);
		toast.error('网络请求失败！')
		if (config.success || config.fail) {
			return e
		}else{
			const p = Promise.reject(e);
			return p
		}
    }
}

export {
    request,
    uploadFile
}