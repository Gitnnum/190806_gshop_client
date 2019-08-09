import {
    reqAddress,
    reqCategorys,
    reqshops
} from '../../api'
import {
    RECEIVE_ADDRESS, 
    RECEIVE_SHOPS, 
    RECEIVE_CATEGORYS
    } from '../mutations-types'
const state ={
    latitude: 40.10038, // 纬度
	longitude: 116.36867, // 经度
	address: {},
	categorys: [],
	shops: [],
}
const mutations= {
    [RECEIVE_ADDRESS] (state,address) {
        state.address = address
    },
    [RECEIVE_SHOPS] (state,shops) {
        state.shops = shops
    },
    [RECEIVE_CATEGORYS] (state,categorys) {
        state.categorys = categorys
    }
}
const actions = {
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
    }
}
const getters = {
    
}
export default {
    state,
    mutations,
    actions,
    getters
}