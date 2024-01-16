<template>
  <div class="flex flex-col">
    <section id="one" class="flex items-center justify-center w-full h-screen">
      <Greeting  />
    </section>
    <section id="two" class="flex items-center justify-center w-full h-screen bg-blue-500">
      <h1 class="text-4xl">CHARACTER</h1>
    </section>
    <section id="three" class="flex items-center justify-center w-full h-screen bg-red-500">
      <h1 class="text-4xl">SKILLS</h1>
    </section>
    <section id="four" class="flex items-center justify-center w-full h-screen bg-yellow-500">
      <h1 class="text-4xl">QUEST LOG</h1>
    </section>
  </div>
</template>

<script setup>
import Greeting from "~/components/home/greeting.vue"
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

