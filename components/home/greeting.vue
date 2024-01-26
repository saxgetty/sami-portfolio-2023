<template>
  <div class="flex flex-col pt-20 lg:pt-0">
    <div v-motion-slide-visible-left class="flex justify-start -ml-32">
      <img src="@/assets/images/castle.svg" alt="castle" class="w-24 h-24" />
    </div>
    <div class="flex flex-col items-center">
      <div v-motion-slide-visible-top>
        <h1 class="text-8xl font-medieval">Greetings</h1>
      </div>
      <div v-motion-slide-visible-bottom>
        <h1 class="text-8xl font-medieval">Traveler!</h1>
      </div>
    </div>
    <div v-motion-slide-visible-right class="flex justify-end -mr-32">
      <img src="@/assets/images/trees.svg" alt="trees" class="w-24 h-24" />
    </div>
  </div>
</template>




  
  <script setup>
  </script>