<!-- Home Page Index -->
<!-- @File Name: index.vue -->
<!-- @Author: Sami Saxton-Getty -->

<template>
  <div>
    <div class="flex flex-col items-center p-4 pt-20 pb-20 md-pad:p-20 lg:min-h-screen animate-slide-in">
      <div class="max-w-6xl break-words bg-white w-full mb-6 shadow-2xl rounded-md">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center mb-5 animate-slide-in-delayed">
              <HomeAvatar />
            </div>
          </div>
          <div class="text-center mt-20 animate-slide-in-delayed">
            <h3 class="text-7xl font-shrikhand text-cool-purple drop-shadow-lg leading-none mb-1">Sami Saxton-Getty</h3>
            <div class="text-2xl mt-5 mb-2 text-cool-green-dark font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 opacity-75"></i>Temecula, California
            </div>
          </div>
          <div class="text-center">
            <div class="flex flex-wrap justify-center">
              <div class="mt-10 pb-20 mx-auto p-4 w-full items-center sm:w-auto">
                <div class="flex flex-col sm:flex-row">
                  <div class="animate-slide-in-delayed">
                    <HomeSocialsEmail />
                  </div>
                  <div class="py-10 px-0 sm:py-0 sm:px-10 animate-slide-in-delayed">
                    <HomeSocialsLinkedin />
                  </div>
                  <div class="pb-10 pr-0 sm:pb-0 sm:pr-10 animate-slide-in-delayed">
                    <HomeSocialsGithub />
                  </div>
                  <div class="animate-slide-in-delayed">
                    <HomeSocialsEtsy />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<style>
  @import "../assets/css/main.css";
</style>