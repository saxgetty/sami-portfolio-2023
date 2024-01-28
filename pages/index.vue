<template>
  <div class="flex flex-wrap flex-col flex-auto max-w-lg lg:max-w-3xl space-y-12 lg:space-y-0">
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
    <section id="four" class="flex items-center justify-center h-fit lg:h-screen pb-20 lg:pb-0">
      <Quests />
    </section>
  </div>
</template>

<script setup>
import Greeting from "~/components/home/greeting.vue"
import Character from "~/components/home/character.vue"
import Skills from "~/components/home/skills.vue"
import Divider from "~/components/home/divider.vue"
import Quests from "~/components/home/quests.vue"
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

