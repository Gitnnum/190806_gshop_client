import {
    reqAutoLogin,
} from '../../api'
import {
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_TOKEN,
    RESET_TOKEN
    } from '../mutations-types'
const state = {
    user: {},
	token: localStorage.getItem('token_key'),
}
const mutations= {
    [RECEIVE_USER] (state, user) {
        state.user = user
    },
    [RESET_USER] (state) {
        state.user = {}
    },
    [RECEIVE_TOKEN] (state, token) {
        state.token = token
    },
    [RESET_TOKEN] (state) {
        state.token = ''
    }
}
const actions = {
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
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}