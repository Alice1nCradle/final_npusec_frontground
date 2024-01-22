import { createApp } from 'vue'
import router from "@/router/routers.js";
import App from './index.vue'



const app = createApp(App)
app.use(router)
app.mount('#app')



