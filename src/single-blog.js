import './static/css/style.css'
import './static/css/plugins.css'
import './static/css/css2.css'
import { createApp } from 'vue'
import singleBlog from "@/single-blog.vue";



const single_blog = createApp(singleBlog)
single_blog.mount('#app')