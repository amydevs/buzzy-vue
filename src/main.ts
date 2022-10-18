import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './App.css'
import {ButtplugClient, buttplugInit} from 'buttplug'
import { clientKey } from './modules/injects'

buttplugInit().then(async () => {
    const app = createApp(App);
    app.provide(clientKey, new ButtplugClient("buzzy"))
    app.use(store);
    app.use(router);
    app.mount('#app');
})
