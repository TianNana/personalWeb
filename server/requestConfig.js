import {isProductionPlatform} from '../public/publicLet.js'
const requestConfig = {
    baseURL: isProductionPlatform?'https://api.prwledu.com/api/':'https://test.prwledu.com/api/',
    baseURL2: isProductionPlatform?'https://api.prwledu.com/api2/':'https://test.prwledu.com/api2/',
    baseURL3: isProductionPlatform?'https://api.prwledu.com/api3/':'https://test.prwledu.com/api3/',
    baseURL4: isProductionPlatform?'https://ppt.prwledu.com':'https://ppt.prwledu.com',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
		'Accept-Language':'zh-CN,en-US;q=0.8',
        'token':'',
    },
    params: {},
    data: {},
    timeout: 20000,
    dataType: 'json', // default
}
export default requestConfig