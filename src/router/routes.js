import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/shop/shop.vue'
import Goods from '../pages/shop/Goods/Goods.vue'
import Ratings from '../pages/shop/Ratings/Ratings.vue'
import Info from '../pages/shop/Info/Info.vue'
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
        path: '/shop',
        component: Shop,
        children: [
            {
                path: '/shop/goods',
                component: Goods
            },
            {
                path: '/shop/ratings',
                component: Ratings
            },
            {
                path: '/shop/info',
                component: Info
            },
            {
                path: '/shop',
                redirect: '/shop/goods'
            }
        ]
    },
    {
        path: '/',
        redirect: '/msite'
    }
]