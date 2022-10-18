import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'

import './App.css'
import { ButtplugClient, buttplugInit } from 'buttplug'

buttplugInit().then(async () => {
  const app = createApp(App);
  app.provide("client", new ButtplugClient("buzzy"))
  app.use(createPinia());
  app.use(router);
  app.mount('#app');
})
