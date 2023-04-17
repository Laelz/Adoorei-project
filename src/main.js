import { createApp } from 'vue'
import App from './index.vue'
import Bootstrap from './plugins/bootstrap.js'
import router from './router'

const myApp = createApp(App).use(router)
myApp.use(Bootstrap)
myApp.mount('#app')
