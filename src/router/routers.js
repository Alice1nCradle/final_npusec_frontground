import {createRouter, createWebHashHistory} from "vue-router";
import App from "@/index.vue";
import userLogin from "@/userLogin.vue";


const routes = [
    {
        path:'/',
        redirect: {
            name: "index"
        }
    },
    {
        path:'/index',
        component: App,
        name: App
    },
    {
        path: '/login',
        name: 'login',
        component: userLogin
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import("/src/userRegister.vue")
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

router.beforeEach((to, from, next) =>
{
    if(to.path === '/login')
    {
        next();
        console.log(localStorage.s);
    }
    else if(to.path === '/register')
    {
        next();
    }
    else
    {
        if(from.path === '/login')
        {
            next();
        }
        else {
            if(localStorage.s === 'true')
            {
                next();
                console.log(localStorage['s']);
            }
            else {
                next('/login');
                console.log('Please login first!');
            }
        }
    }
})

export default router