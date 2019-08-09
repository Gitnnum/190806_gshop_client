import {
    reqAddress,
    reqCategorys,
    reqshops,
    reqAutoLogin
} from '../api'
import {
    RECEIVE_ADDRESS, 
    RECEIVE_SHOPS, 
    RECEIVE_CATEGORYS, 
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_TOKEN,
    RESET_TOKEN
    } from './mutations-types'
export default {
    async getAddress ({commit, state}) {
        const {latitude, longitude} = state
        const result = await reqAddress(latitude, longitude)
        commit(RECEIVE_ADDRESS, result.data)
    },
    async getCategorys ({commit},callback) {
        const result = await reqCategorys()
        commit(RECEIVE_CATEGORYS, result.data)
        typeof callback === 'function' && callback()
    },
    async getShops ({commit, state}) {
        const {latitude, longitude} = state
        const result = await reqshops(latitude, {latitude, longitude})
        commit(RECEIVE_SHOPS, result.data)
    },

    saveUser ({commit}, user) {
        const token = user.token
        localStorage.setItem('token_key',token)
        commit(RECEIVE_TOKEN,token)
        commit(RECEIVE_USER, user)
    },

    logout ({commit}) {
        commit(RESET_TOKEN)
        commit(RESET_USER)
        localStorage.removeItem('token_key')
    },
    async autoLogin ({commit, state}) {
        if(state.token){
            const result = await reqAutoLogin()
            const user = result.data
            if(result.code === 0){
                commit(RECEIVE_USER, user)
            }
        } 
    }
}