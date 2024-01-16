import './assets/main.css'
import 'bootstrap-5.3.0-alpha1'
import 'bootstrap-5.3.0-alpha1/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import router from "@/router/routers.js";
import App from './App.vue'



const app = createApp(App)
app.use(router)
app.mount('#app')



