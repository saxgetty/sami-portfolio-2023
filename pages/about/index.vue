<template>
  <div class="animate-slide-in">
    <div class="flex items-center justify-center p-4 pt-20 pb-20 md-pad:p-20">
      <div class="container grid gap-8 grid-cols-1 grid-rows-10 max-w-6xl lg:grid-cols-2 lg:grid-rows-3">
        <div class="flex bg-white p-4 rounded-md shadow-2xl text-center row-span-2 lg:row-span-1 animate-slide-in-delayed">
          <div class="p-10 animate-slide-in-delayed">
            <AboutGetToKnowMe />
          </div>
        </div>
        <div class="flex bg-white p-4 rounded-md shadow-2xl text-center row-span-2 lg:row-span-1 animate-slide-in-delayed">
          <div class="flex-1 p-10 animate-slide-in-delayed">
            <AboutCoreValues />
          </div>
        </div> 
        <div class="flex bg-white items-center pt-20 p-4 rounded-md shadow-2xl row-span-3 lg:col-span-2 lg:row-span-1 lg:pt-0 animate-slide-in-delayed">
          <div class="flex-1 p-10 animate-slide-in-delayed">
            <AboutTimeline />
          </div>
        </div>
        <div class="flex bg-white p-4 rounded-md shadow-2xl row-span-3 lg:col-span-2 lg:row-span-1 animate-slide-in-delayed">
          <div class="flex-1 p-10 animate-slide-in-delayed">
            <TabGroup>
              <TabList class="space-x-0 rounded-md bg-cool-green p-1 sm:flex sm:space-x-1">
                <Tab as="template" v-slot="{ selected }">
                  <button
                    :class="[
                      'w-full rounded-md py-2.5 text-xl font-shrikhand leading-5 text-creamy-beige sm:text-xl',
                      'focus:outline-none focus:ring-0',
                      selected ? 'bg-cool-green-dark shadow' : 'text-creamy-beige hover:bg-white/[0.12] hover:text-white',]">
                    Languages
                  </button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button
                    :class="[
                      'w-full rounded-md py-2.5 text-xl font-shrikhand leading-5 text-creamy-beige',
                      'focus:outline-none focus:ring-0',
                      selected ? 'bg-cool-green-dark shadow' : 'text-creamy-beige hover:bg-white/[0.12] hover:text-white',]">
                    Frameworks
                  </button>
                </Tab>
                <Tab as="template" v-slot="{ selected }">
                  <button
                    :class="[
                      'w-full rounded-md py-2.5 text-xl font-shrikhand leading-5 text-creamy-beige sm:text-xl',
                      'focus:outline-none focus:ring-0',
                      selected ? 'bg-cool-green-dark shadow' : 'text-creamy-beige hover:bg-white/[0.12] hover:text-white',]">
                    Tools
                  </button>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div class="grid grid-cols-3 grid-rows-2 items-center justify-center gap-7 pt-10 md:grid-cols-5 md:grid-rows-2">
                    <div class="mx-auto">
                      <AboutSkillsLanguagesCSharp />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesC++ />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesCss3 />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesHtml5 />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesJava />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesJavascript />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesPython />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesSql />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesSwift />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsLanguagesTypescript />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div class="grid grid-cols-3 grid-rows-2 items-center justify-center gap-7 pt-10 md:grid-cols-5 md:grid-rows-2">
                    <div class="mx-auto">
                      <AboutSkillsFrameworksBootstrap />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsFrameworksMaterialUi />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsFrameworksNextJs />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsFrameworksNuxtJs />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsFrameworksReactJs />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsFrameworksTailwindCss />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div class="grid grid-cols-3 grid-rows-2 items-center justify-center gap-7 pt-10 md:grid-cols-5 md:grid-rows-2">
                    <div class="mx-auto">
                      <AboutSkillsToolsAws />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsDbeaver />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsGithub />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsIntelliJ />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsJira />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsLinux />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsPostman />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsSelenium />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsVirtualMachine />
                    </div>
                    <div class="mx-auto">
                      <AboutSkillsToolsVisualStudio />
                    </div>
                  </div>
                </TabPanel>
                <!-- ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 -->
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<style>
  @import "../../assets/css/main.css";
</style>