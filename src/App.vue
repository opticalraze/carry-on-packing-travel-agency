<script setup>
import Header from './components/Header.vue';

import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()

import { useParallax } from '@vueuse/core'
import { computed, reactive, ref } from 'vue';

const target = ref(null)

const parallex = reactive(useParallax(target))

const layer0 = computed(() => ({
    transform: `translateX(${parallex.tilt * -10}px) translateY(${parallex.roll * -10}px) scale(1.2)`
}))

const layer1 = computed(() => ({
    transform: `translateX(${parallex.tilt * -20}px) translateY(${parallex.roll * -20}px)`
}))

const layer2 = computed(() => ({
    transform: `translateX(${parallex.tilt * -40}px) translateY(${parallex.roll * -40}px) scale(1.2)`
}))


</script>

<template>
    <Header />
    <main>
        <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <img :style="layer0" src="./assets/beach-1236581.jpg" alt="" class="z-10 absolute bottom-0 left-0 h-full w-full object-cover object-bottom">
            <h1 :style="layer1" class="font-black text-white z-20 mt-[-10rem]" style="font-size: 12rem;">Vacation Time</h1>
            <img ref="target" :style="layer2" src="./assets/model-3212282.png" alt="" class="z-40 absolute bottom-0 left-0 h-full w-full object-contain object-bottom pointer-events-none">
        </section>
    </main>
</template>