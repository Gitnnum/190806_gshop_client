import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header'
import store from './store'
import Star from './components/Star/Star.vue'
import {Button} from 'mint-ui'
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)
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