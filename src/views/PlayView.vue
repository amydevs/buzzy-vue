<template>
  <div class="pt-20">
    hi
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useButtplugStore } from '@/store/buttplug';

const client = useButtplugStore().client;
const router = useRouter();

if (!client?.Connected) {
  router.push("/settings")
}

  
</script>
  