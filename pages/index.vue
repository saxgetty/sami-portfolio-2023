<template>
  <div class="flex flex-wrap flex-col flex-auto max-w-lg lg:max-w-3xl">
    <section id="one" class="flex items-center justify-center h-fit lg:h-screen">
      <Greeting  />
    </section>
    <Divider />
    <section id="two" class="flex items-center justify-center h-fit lg:h-screen">
      <Character  />
    </section>
    <Divider />
    <section id="three" class="flex items-center justify-center h-fit lg:h-screen">
      <Skills />
    </section>
    <Divider />
    <section id="four" class="flex items-center justify-center h-fit lg:h-screen">
      <h1 class="text-4xl">QUEST LOG</h1>
    </section>
  </div>
</template>

<script setup>
import Greeting from "~/components/home/greeting.vue"
import Character from "~/components/home/character.vue"
import Skills from "~/components/home/skills.vue"
import Divider from "~/components/home/divider.vue"
// import Projects from "~/components/home/projects.vue"
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

