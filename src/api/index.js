import ajax from './ajax'

/* 
1、 根据经纬度获取位置详情
*/
export const reqAddress = (latitude,longitude) => ajax.get(`/position/${latitude},${longitude}`)

//2.获取食品分类列表
export const reqCategorys = () => ajax.get('/index_category',{
    headers: {
        needToken: true
    }
})

// 3、根据经纬度获取商铺列表
export const reqshops = ({latitude,longitude}) => ajax(
    {
        url: '/shops',
        params: {
            latitude,
            longitude
        },
        headers: {
            needToken: true
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

//6、用户名密码登陆
export const reqLoginPwd = (name,pwd,captcha) => ajax.post('/login_pwd',{name,pwd,captcha})

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
    url: '/login_sms',
    data: {
        phone,
        code
    }
})

// 9、根据token进行自动登陆
export const reqAutoLogin = () => ajax({
    url: '/auto_login',
    headers: {
      needToken: true
    }
  })

// reqAddress('116.36867', '40.10038').then((result) => {
//     console.log('result', result)
// })
