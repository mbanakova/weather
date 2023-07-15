import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import './assets/scss/global.scss'

const app = createApp(App)

app.use(pinia)
app.mount('#app')
