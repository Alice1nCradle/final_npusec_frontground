import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'
import { createApp } from 'vue'
import userRegister from "@/userRegister.vue";



const register = createApp(userRegister)
register.mount('#app')
