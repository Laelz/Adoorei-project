import { createApp } from 'vue'
import App from './App.vue'
import Bootstrap from './plugins/bootstrap.js'

const myApp = createApp(App)
myApp.use(Bootstrap)
myApp.mount('#app')
