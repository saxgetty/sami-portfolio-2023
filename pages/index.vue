<!-- Home Page Index -->
<!-- @File Name: index.vue -->
<!-- @Author: Sami Saxton-Getty -->
<!-- grid-flow-row auto-rows-max -->
<template>
    <!-- TODO: Style -->
    <div>     
      <div class="flex flex-col">
        <div class="mt-20 mx-auto items-center">
          <div>
            <HomeAvatar />
          </div>  
        </div>
        <div class="mt-10 mx-auto items-center">
          <div class="text-4xl font-groovy text-calm-blue sm:text-5xl md:text-6xl">
            Sami Saxton-Getty
          </div>  
        </div> 
        <div class="mt-10 mx-auto items-center">
          <div class="flex flex-col pb-20 sm:flex-row">
            <div>
              <HomeSocialsEmail />
            </div>
            <div class="mx-0 my-10 sm:mx-10 sm:my-0">
              <HomeSocialsLinkedin />
            </div>
            <div>
              <HomeSocialsGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
</script>
