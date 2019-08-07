import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
export default [
    {
        path: '/msite',
        component: Msite,
        meta: {
            footerShow: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            footerShow: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            footerShow: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            footerShow: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/msite'
    }
]