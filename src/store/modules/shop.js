import {
    reqGoods,
    reqRatings,
    reqInfo
} from '../../api'
import {
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO
    } from '../mutations-types'
const state = {
    goods: [],
	ratings: [],
	info: {}
}
const mutations= {
    [RECEIVE_GOODS] (state, goods) {
        state.goods = goods
    },
    [RECEIVE_RATINGS] (state, ratings) {
        state.ratings = ratings
    },
    [RECEIVE_INFO] (state, info) {
        state.info = info
    }
}
const actions = {
    async getGoods ({commit}) {
        const result = await reqGoods()
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_GOODS,goods)
        }
    },
    async getRatings ({commit}) {
        const result = await reqRatings()
        if(result.code === 0){
            const ratings = result.data
            commit(RECEIVE_RATINGS,ratings)
        }
    },
    async getInfo ({commit}) {
        const result = await reqInfo()
        if(result.code === 0){
            const info = result.data
            commit(RECEIVE_INFO,info)
        }
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