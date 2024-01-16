<template>
  <nav
    class="fixed w-full z-20 top-0 start-0"
  >
  <div class="navbar pr-12 pl-12 bg-transparent justify-between">
    <div class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
      <button>
        LINKEDIN
      </button>
      <button>
        GITHUB
      </button>
      <button>
        ETSY
      </button>
    </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li>
            <a
              href="#one"
              class="block py-2 px-3 md:hover:text-green-500 md:p-0"
              aria-current="page"
              >GREETINGS</a
            >
          </li>
          <li>
            <a
              href="#two"
              class="block py-2 px-3 md:hover:text-green-500 md:p-0"
              >CHARACTER</a
            >
          </li>
          <li>
            <a
              href="#three"
              class="block py-2 px-3 md:hover:text-green-500 md:p-0"
              >SKILLS</a
            >
          </li>
          <li>
            <a
              href="#four"
              class="block py-2 px-3 md:hover:text-green-500 md:p-0"
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
