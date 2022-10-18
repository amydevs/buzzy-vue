<template>
    <Disclosure as="nav" class="fixed top-0 left-0 right-0 transition-all z-50 dark:bg-[#1C1B22] bg-white">
        <div class="auto-limit-w sm:border-b-0 border-b-[1px] border-white/30">
            <div class="relative flex h-14 items-center justify-between">
                <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <DisclosureButton class="inline-flex items-center justify-center p-2">
                        <span class="sr-only">Open main menu</span>
                        H
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center sm:items-stretch justify-between">
                    <div class="flex flex-shrink-0 px-3 text-lg items-center hover:text-primary transition-all">
                        <RouterLink to="/"><span class="text-primary">Buzzy!</span></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </Disclosure>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const router = useRouter();
</script>