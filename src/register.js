import './assets/main.css'
import 'bootstrap-5.3.0-alpha1'
import 'bootstrap-5.3.0-alpha1/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import userRegister from "@/userRegister.vue";



const register = createApp(userRegister)
register.mount('#app')
