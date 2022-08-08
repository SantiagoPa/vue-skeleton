import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

createApp(App)
    .use( createPinia() )
    .use(router)
    .mount('#app')
