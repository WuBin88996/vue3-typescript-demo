import { createApp } from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(Vant)
app.provide('store', store)
app.use(router).mount('#app')
