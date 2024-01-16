import {createRouter, createWebHashHistory} from "vue-router";


let routes;
routes = [{
    path: "/",
    name: "home",
    component: () => import('../index.vue')
    },
    {
    path: "/login",
    name: "login",
    component:  () => import('../components/userLogin.vue')
    },
    {
    path: "/register",
    name: "register",
    component: () => import('../components/userRegister.vue')
    }
    ];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router