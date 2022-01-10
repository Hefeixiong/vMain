import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import router from './router';
//import element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

// app.use(ElementPlus)

app.use(router).mount('#app')