<template>
  <nav class="fixed w-full z-20 top-0 start-0">
    <div class="navbar pr-10 pl-10 bg-transparent justify-between">
      <div class="items-center hidden w-full 2xl:flex 2xl:w-auto">
        <ul
          class="flex flex-col p-4 2xl:p-0 mt-4 font-medium 2xl:space-x-8 rtl:space-x-reverse 2xl:flex-row"
        >
          <li>
            <button>LINKEDIN</button>
          </li>
          <li>
            <button>GITHUB</button>
          </li>
          <li>
            <button>ETSY</button>
          </li>
        </ul>
      </div>
      <div class="items-center hidden w-full 2xl:flex 2xl:w-auto">
        <ul
          class="flex flex-col p-4 2xl:p-0 mt-4 font-medium 2xl:space-x-8 rtl:space-x-reverse 2xl:flex-row"
        >
          <li>
            <a
              href="#one"
              class="block py-2 px-3 2xl:hover:text-green-500 2xl:p-0"
              aria-current="page"
              >GREETINGS</a
            >
          </li>
          <li>
            <a
              href="#two"
              class="block py-2 px-3 2xl:hover:text-green-500 2xl:p-0"
              >CHARACTER</a
            >
          </li>
          <li>
            <a
              href="#three"
              class="block py-2 px-3 2xl:hover:text-green-500 2xl:p-0"
              >SKILLS</a
            >
          </li>
          <li>
            <a
              href="#four"
              class="block py-2 px-3 2xl:hover:text-green-500 2xl:p-0"
              >QUEST LOG</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue"

const navLinks = ref([])

onMounted(() => {
  navLinks.value = Array.from(document.querySelectorAll("nav a"))
})
</script>
