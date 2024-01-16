import './assets/main.css'
import 'bootstrap-5.3.0-alpha1'
import 'bootstrap-5.3.0-alpha1/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import aboutPwn from "@/components/aboutPwn.vue";
import aboutRe from "@/components/aboutRe.vue";



const re = createApp(aboutRe)
re.mount('#app')
