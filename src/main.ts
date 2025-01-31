import { createApp } from 'vue'
import '@/assets/style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia).mount('#app')
