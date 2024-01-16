import './assets/main.css'
import 'bootstrap-5.3.0-alpha1'
import 'bootstrap-5.3.0-alpha1/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import userRegister from "@/userRegister.vue";
import singleBlog from "@/single-blog.vue";



const register = createApp(singleBlog)
register.mount('#app')