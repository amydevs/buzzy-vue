<template>
  <div class="pt-20">
    <button @click="embedded_connect">Web-Bluetooth</button>
    <div v-for="device in client?.Devices" :key="device.Index">
      {{device.Name}}
      <button @click="vibrate_device(device)">Vibrate</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { clientKey } from '@/modules/injects';
import { ButtplugClientDevice, ButtplugEmbeddedConnectorOptions } from 'buttplug';
import { inject } from 'vue';

const client = inject(clientKey);

const embedded_connect = async () => {
  const opts = new ButtplugEmbeddedConnectorOptions();
  try {
    await client?.connect(opts);
    await client?.startScanning();
  }
  catch {
    client?.disconnect();
  }
}

const vibrate_device = async (device: ButtplugClientDevice) => {
  device.vibrate(1.0);
}

</script>