import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'

import './App.css'
import { ButtplugClient, buttplugInit } from 'buttplug'
import { clientKey } from './modules/injects'

buttplugInit().then(async () => {
  const app = createApp(App);
  app.provide(clientKey, new ButtplugClient("buzzy"))
  app.use(createPinia());
  app.use(router);
  app.mount('#app');
})
