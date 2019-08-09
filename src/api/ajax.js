import axios from 'axios'
import qs from 'qs'
import store from '../store'
import router from '../router'
import {Toast} from 'mint-ui'
// 请求拦截器
axios.interceptors.request.use(config => {
    const {method, data} = config
    if(method.toUpperCase() === 'POST' && data instanceof Object){
        config.data = qs.stringify(data)
    }
    // 如果需要token
    if(config.headers.needToken){
        // 先判断状态里面有没有token
        const token = store.state.user.token
        if(!token){// 如果现实的情况是没有token  直接进入失败的流程
            let error = new Error('没有token，请先登录')
            error.status = 401 // 定义添加一个没有权限的错误状态码
            throw error
        }else{  //  有token 就将其添加到请求头上，
            config.headers.Authorization = token
        }
    }
    return config
})
// 响应拦截器
axios.interceptors.response.use(response =>{
    return response.data
},error =>{
    const {response, message, status } = error
    // 判断两个方向  根本就没有token，那末，就证明没有发送请求，那么响应体是没有东西的    token过期
    if(!response){
        if(status === 401){
            if(router.currentRoute.path !== '/login'){
                Toast(message)
                router.replace('/login')
            }
        }
    }else{
        if (response.status === 404){
            Toast('请求的资源不存在')
        }else if(response.status === 401){
            if(router.currentRoute.path !== '/login'){
                store.dispatch('logout')
                Toast(response.data.message)
                router.replace('/login')
            }
        }else{
            Toast('请求出错，'+message)
        }
    }
    return new Promise(() =>{})
})
export default axios