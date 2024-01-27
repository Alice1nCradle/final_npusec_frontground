import { createApp } from 'vue'
import Blog from "@/blog.vue";
import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'

const blog = createApp(Blog)
blog.mount('#app')