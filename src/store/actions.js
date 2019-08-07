import {
    reqAddress,
    reqCategorys,
    reqshops
} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_SHOPS, RECEIVE_CATEGORYS} from './mutations-types'
export default {
    async getAddress ({commit, state}) {
        const {latitude, longitude} = state
        const result = await reqAddress(latitude, longitude)
        commit(RECEIVE_ADDRESS, result.data)
    },
    async getCategorys ({commit}) {
        const result = await reqCategorys()
        commit(RECEIVE_CATEGORYS, result.data)
    },
    async getShops ({commit, state}) {
        const {latitude, longitude} = state
        const result = await reqshops(latitude, {latitude, longitude})
        commit(RECEIVE_SHOPS, result.data)
    }
}