import { createApp } from 'vue'
import App from './App.vue'
import httpOk from './common/httpOk'

const app = createApp(App)

app.provide('httpOk', httpOk)

app.mount('#app')