import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header'
import './api'
Vue.component('Header', Header)
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    // render: h => h(App),
    router
})