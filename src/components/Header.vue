<script setup>
import { ref } from 'vue';


const menu = ref(false);
</script>

<template>
    <header class="header-bg fixed z-30 top-0 left-0 w-full px-8 pt-2 pb-16 flex items-center justify-between">
        <div>
            <h1 class="text-3xl font-black text-white">Carry On Packing.</h1>
            <h2 class="font-thin text-white">Travel Agency</h2>
        </div>
        <button @click="menu = true" aria-label="menu">
            <img src="../assets/bars.svg" alt="" class="h-10 w-10">
        </button>
    </header>
    <nav v-if="menu" class="z-50 fixed right-0 top-0 h-screen w-96 bg-black bg-opacity-75 backdrop-blur-lg text-white p-8 pt-32">
        <button @click="menu = false" class="position absolute top-5 right-8" aria-label="close menu"><img src="../assets/close.svg" alt="" class="h-10 w-10"></button>
        <a href="#" class="block text-6xl font-black mb-4">Home</a>
        <a href="#" class="block text-6xl font-black mb-4">Trips</a>
        <a href="#" class="block text-6xl font-black mb-4">About</a>
        <a href="#" class="block text-6xl font-black mb-4">Contact</a>
    </nav>
</template>

<style scoped>

.header-bg {
    background: linear-gradient(rgba(0,0,0,.90), rgba(0,0,0,.5), rgba(0,0,0,0));
}

</style>