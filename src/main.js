
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3Lottie)
app.use(AOS.init())
app.use(ElementPlus)

app.mount('#app')
