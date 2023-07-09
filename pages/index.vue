<!-- Home Page Index -->
<!-- @File Name: index.vue -->
<!-- @Author: Sami Saxton-Getty -->
<!-- grid-flow-row auto-rows-max -->
<template>
    <!-- TODO: Style -->
    <Transition appear leave-to-class="translate-x-[150%] opacity-0"
      leave-active-class="transition duration-300">
      <div>     
        <div class="flex min-h-screen flex-col">
          <div class="mt-20 mx-auto items-center">
            <div>
              <HomeAvatar />
            </div>  
          </div>
          <div class="mt-10 mx-auto items-center">
            <div class="flex flex-col text-4xl font-shrikhand text-calm-blue md-icon:flex-row smX:text-6xl xs:text-5xl">
              <div class="pr-0 pb-5 text-center md:pr-5 md:pb-0">
                Sami
              </div>
              <div class="text-center">
                Saxton-Getty
              </div>
            </div>
          </div> 
          <div class="mt-10 mx-auto p-4 items-center w-full max-w-4xl lgX:w-3/4">
            <div class="flex flex-col pb-20">
              <div>
                <HomeSocialsEmail />
              </div>
              <div class="my-10">
                <HomeSocialsLinkedin />
              </div>
              <div>
                <HomeSocialsGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
  </Transition>
</template>

<script setup>
</script>
