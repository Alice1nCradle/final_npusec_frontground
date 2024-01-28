import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'
import { createApp } from 'vue'
import userLogin from "@/userLogin.vue";



const login = createApp(userLogin)
login.mount('#app')
