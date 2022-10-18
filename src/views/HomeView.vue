<template>
  <div class="pt-20">
    hi
  </div>
</template>

<script lang="ts" setup>
import { ButtplugClient } from 'buttplug';
import { inject } from 'vue';
import { clientKey } from '@/modules/injects'

const client = inject(clientKey);


</script>
