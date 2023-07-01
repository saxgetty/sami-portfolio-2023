<!-- Home Page Index -->
<!-- @File Name: index.vue -->
<!-- @Author: Sami Saxton-Getty -->
<!-- grid-flow-row auto-rows-max -->
<template>
    <!-- TODO: Style -->
    <div>     
      <div class="flex flex-col min-h-screen">
        <div class="mt-20 mx-auto items-center">
          <div>
            <avatar />
          </div>  
        </div>
        <div class="mt-10 mx-auto items-center">
          <div class="text-4xl font-fascinateInline text-calm-blue sm:text-5xl md:text-6xl">
            Sami Saxton-Getty
          </div>  
        </div> 
        <div class="mt-10 mx-auto items-center">
            <hr class="w-48 h-1 my-4 bg-creamy-beige border-0 rounded sm:my-10">
        </div>
        <div class="mt-10 mx-auto items-center">
          <div class="flex flex-col mb-10 sm:flex-row sm:mb-10">
            <div>
              <email />
            </div>
            <div class="mx-0 my-10 sm:mx-10 sm:my-0">
              <linkedin />
            </div>
            <div>
              <github />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
</script>
