import { createApp } from 'vue'
import router from "@/router/routers.js";
import App from './index.vue'
import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'


const app = createApp(App)
app.use(router)
app.mount('#app')



