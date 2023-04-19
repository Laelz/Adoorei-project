import { createApp } from 'vue'
import App from './index.vue'
import Bootstrap from './plugins/bootstrap.js'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const myApp = createApp(App).use(store).use(router).use(VueAxios, axios)
myApp.use(Bootstrap)
myApp.mount('#app')
