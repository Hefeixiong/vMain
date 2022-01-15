import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import router from './router';

import svgIcon from '@/icons/SvgIcon.vue'

const app = createApp(App)
app.component('SvgIcon' , svgIcon)

app.use(router).mount('#app')
