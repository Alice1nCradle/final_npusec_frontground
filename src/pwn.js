import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'
import { createApp } from 'vue'
import aboutPwn from "@/components/aboutPwn.vue";



const pwn = createApp(aboutPwn)
pwn.mount('#app')
