<template>
    <Disclosure v-slot="{ open, close }" as="nav" class="fixed top-0 left-0 right-0 transition-all z-50 dark:bg-[#1C1B22] bg-white">
        <div class="auto-limit-w sm:border-b-0 border-b-[1px] border-white/30">
            <div class="relative flex h-14 items-center justify-between">
                <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <DisclosureButton class="inline-flex items-center justify-center p-2">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6 text-primary" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center sm:items-stretch justify-between">
                    <div class="flex flex-shrink-0 px-3 text-lg items-center hover:text-primary transition-all">
                        <RouterLink to="/"><span class="text-primary">Buzzy!</span></RouterLink>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex">
                            <RouterLink 
                                v-for="(route, i) in $router.options.routes" 
                                :key="i" :to="route.path"
                                :class="`px-3 py-2 text-sm hover:tracking-[0.2em] transition-all ${ $route.path === route.path && 'text-primary font-semibold'}`"
                            >
                                {{ route.name }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DisclosurePanel :class="`sm:hidden ${!open ? 'max-h-0' : 'max-h-96 shadow-lg'} overflow-hidden transition-all`" static>
            <div className="space-y-1 pt-2 pb-3">
                <RouterLink 
                    v-for="(route, i) in $router.options.routes" 
                    :key="i" :to="route.path"
                    @click="() => close()"
                    class="block px-6 py-2 hover:text-primary transition-all"
                >
                    {{ route.name }}
                </RouterLink>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

</script>