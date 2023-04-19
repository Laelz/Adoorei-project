import { createApp } from 'vue'
import App from './index.vue'
import Bootstrap from './plugins/bootstrap.js'
import router from './router'
import store from './store'

const myApp = createApp(App).use(store).use(router)
myApp.use(Bootstrap)
myApp.mount('#app')
