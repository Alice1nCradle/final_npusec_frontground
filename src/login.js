import './assets/main.css'
import 'bootstrap-5.3.0-alpha1'
import 'bootstrap-5.3.0-alpha1/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import userLogin from "@/userLogin.vue";



const login = createApp(userLogin)
login.mount('#app')
