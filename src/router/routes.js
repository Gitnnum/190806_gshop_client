import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
export default [
    {
        path: '/msite',
        component: Msite
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/profile',
        component: Profile
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