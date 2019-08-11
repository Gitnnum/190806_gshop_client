import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header'
import store from './store'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import {Button} from 'mint-ui'
import './mock/mock-server'
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)
Vue.component('CartControl', CartControl)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    // components: {
    //     App
    // },
    // template: '<App/>',
    render: h => h(App),
    router,
    store
})