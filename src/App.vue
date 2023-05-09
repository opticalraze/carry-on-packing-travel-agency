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

//import { useImage } from '@vueuse/core'
import background from './assets/beach-1236581.jpg';
import foreground from './assets/model-3212282.png';

//const backgroundUrl = 'https://opticalraze.com/carry-on-packing-travel-agency/assets/beach-1236581-89342222.jpg'
//const foregroundUrl = './assets/model-3212282.png'
//const { isLoading } = useImage({ src: backgroundUrl })
//const { isLoading } = useImage({ src: backgroundUrl })
//const { isLoading } = useImage({ src: foregroundUrl })
//const isLoading1 = true;
const isLoading = false;
</script>

<template>
    <Header />
    <main>
        <section v-if="isLoading" class="z-[60] fixed top-0 left-0 h-screen w-full bg-black flex items-center justify-center">
            <div>
                <h1 class="text-9xl font-black text-white">Carry On Packing.</h1>
                <h2 class="text-4xl font-thin text-white">Travel Agency</h2>
            </div>
        </section>
        <section v-else class="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <img :style="layer0" :src="background" alt="" class="z-10 absolute bottom-0 left-0 h-full w-full object-cover object-bottom">
            <h1 :style="layer1" class="font-black text-white z-20 mt-[-10rem]" style="font-size: 12rem;">Vacation Time</h1>
            <img ref="target" :style="layer2" :src="foreground" alt="" class="z-40 absolute bottom-0 left-0 h-full w-full object-contain object-bottom pointer-events-none">
        </section>
    </main>
</template>