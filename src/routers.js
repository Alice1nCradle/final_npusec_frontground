import App from '@/App.vue'
import userLogin from "@/userLogin.vue";
import userRegister from "@/userRegister.vue";

const routers = [
    {
        path:'/home',
        name: 'home',
        component: App
    },
    {
        path:'/',
        name: 'home',
        component: App
    },
    {
        path:'/login',
        name: 'login',
        component: userLogin
    },
    {
        path:'/register',
        name: 'register',
        component: userRegister
    }
]

export default routers

