import ajax from './ajax'

/* 
1、 根据经纬度获取位置详情
*/
export const reqAddress = (latitude,longitude) => ajax.get(`/position/${latitude},${longitude}`)

//2.获取食品分类列表
export const reqCategorys = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
export const reqshops = ({latitude,longitude}) => ajax(
    {
        url: '/shops',
        params: {
            latitude,
            longitude
        }
    }
)

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = ({latitude,longitude},keyword)=> ajax({
    url: 'search_shops',
    params: {
        keyword,
        geohash:`${latitude},${longitude}`
    }
})

//## 5、获取一次性验证码
export const reqCaptcha = () =>ajax.get('/captcha')

//6、用户名密码登陆
export const reqLoginPwd = (name,pwd) => ajax.post('/login_pwd',{name,pwd})

// 7、发送短信验证码
export const reqLoginSendcode = (phone) => ajax({
    url: '/sendcode',
    params: {
        phone
    }
})

// 8、手机号验证码登陆
export const reqLoginSms = (phone,code) => ajax({
    method: 'POST',
    url: '/login_sm',
    data: {
        phone,
        code
    }
})

// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax.get('/userinfo')

//10、用户登出
export const reqLoginOut = () => ajax.get('/logout')

// reqAddress('116.36867', '40.10038').then((result) => {
//     console.log('result', result)
// })
