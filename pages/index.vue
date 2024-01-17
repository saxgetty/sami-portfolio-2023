<template>
  <div class="flex flex-wrap flex-col flex-auto">
    <section id="one" class="flex items-center justify-center w-full h-screen">
      <Greeting  />
    </section>
    <div class="divider"></div>
    <section id="two" class="flex items-center justify-center w-full h-screen">
      <Character  />
    </section>
    <section id="three" class="flex items-center justify-center w-full h-screen">
      <h1 class="text-4xl">SKILLS</h1>
    </section>
    <section id="four" class="flex items-center justify-center w-full h-screen">
      <h1 class="text-4xl">QUEST LOG</h1>
    </section>
  </div>
</template>

<script setup>
import Greeting from "~/components/home/greeting.vue"
import Character from "~/components/home/character.vue"
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

