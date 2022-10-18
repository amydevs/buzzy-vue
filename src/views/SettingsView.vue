<template>
  <div class="pt-20 auto-limit-w flex flex-col">
    <div class="card space-y-3">
      <h1>Connect</h1>
      <table class="table-fixed w-full text-center border-collapse border" cellPadding="5">
        <thead>
          <tr class="border">
            <th class="w-2/3">
              Device
            </th>
            <th>
              Disconnect
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border" v-for="device in devices" :key="device.Index">
            <td>{{device.Name}}</td>
            <td><button class="underline" @click="disconnect_device(device as any)">Disconnect</button></td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-end">
        <button class="action" @click="embedded_connect">WebBluetooth</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useButtplugStore } from '@/store/buttplug';
import { ButtplugClientDevice, ButtplugEmbeddedConnectorOptions } from 'buttplug';

const { client, devices } = useButtplugStore();

const embedded_connect = async () => {
  const opts = new ButtplugEmbeddedConnectorOptions();
  if (client?.Connected) {
    await client?.disconnect();
  }
  try {
    await client?.connect(opts);
    await client?.startScanning();
  }
  catch (e) {
    console.log(e);
    client?.disconnect();
  }
}
const disconnect_device = async (device: ButtplugClientDevice) => {
  console.log(device.emitDisconnected());
}

</script>