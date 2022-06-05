import Home from '../views/home.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "The-firm" */ '../views/about.vue')
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () => import(/* webpackChunkName: "The-firm" */ '../views/contactUs.vue')
    },
    {
        path: '/business-areas',
        name: 'BusinessAreas',
        component: () => import(/* webpackChunkName: "The-firm" */ '../views/businessAreas.vue')
    },
]