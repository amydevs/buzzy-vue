import { ButtplugClient, ButtplugClientDevice, buttplugInit } from 'buttplug'
import { defineStore } from 'pinia'
import { inject, ref } from 'vue';
export const useButtplugStore = defineStore('buttplug', () => {
  const client = inject("client") as ButtplugClient;
  const devices = ref<ButtplugClientDevice[]>([]);

  const addDevice = (device: ButtplugClientDevice) => {
    devices.value.push(device);
  }
  const removeDevice = (device: ButtplugClientDevice) => {
    devices.value = devices.value.filter((d) => d.Index !== device.Index);
  }

  client.on('deviceadded', addDevice);
  client.on('deviceremoved', removeDevice);

  return { 
    client,
    devices  
  };
})