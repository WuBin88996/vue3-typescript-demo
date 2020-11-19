import { createApp } from 'vue'
import Ant from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'
import 'normalize.css'

const app = createApp(App)

app.use(Ant)
app.provide('store', store)
app.use(router).mount('#app')
