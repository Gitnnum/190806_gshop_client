import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header'
import store from './store'
Vue.component('Header', Header)
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