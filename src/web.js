import { createApp } from 'vue'
import aboutWeb from "@/components/aboutWeb.vue";
import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'


const web = createApp(aboutWeb)
web.mount('#app')
