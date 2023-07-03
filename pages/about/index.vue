<template>
    <div>     
      <div class="flex min-h-screen items-center justify-center p-4 pt-20 sm:p-20">
        <div class="container grid gap-8 grid-cols-1 grid-rows-5 max-w-5xl lg:grid-cols-2 lg:grid-rows-3">
          <div class="flex bg-white p-4 rounded-md shadow-md text-center row-span-1">
            <div class="p-10">
              <aboutMe />
            </div>
          </div>
          <div class="flex bg-white p-4 rounded-md shadow-md text-center row-span-1">
            <div class="flex-1 p-10">
              <coreValues />
            </div>
          </div>
          <div class="flex bg-white p-4 pt-20 rounded-md shadow-md row-span-2 lg:col-span-2 lg:row-span-1 lg:items-center lg:pt-0">
            <div class="flex-1 p-10">
              <timeline />
            </div>
          </div>
          <div class="flex bg-white p-4 rounded-md shadow-md row-span-1 lg:col-span-2 lg:row-span-1">
            <div class="flex-1 p-10">
              <TabGroup>
                <TabList class="flex space-x-1 rounded-full bg-peachy-pink p-1">
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="[
                        'w-full rounded-full py-2.5 text-md font-semibold leading-5 text-peachy-pink-dark',
                        'focus:outline-none focus:ring-0',
                        selected ? 'bg-white shadow' : 'text-peachy-pink-dark hover:bg-white/[0.12] hover:text-white',]">
                      Languages
                    </button>
                  </Tab>
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="[
                        'w-full rounded-full py-2.5 text-md font-semibold leading-5 text-peachy-pink-dark',
                        'focus:outline-none focus:ring-0',
                        selected ? 'bg-white shadow' : 'text-peachy-pink-dark hover:bg-white/[0.12] hover:text-white',]">
                      Frameworks
                    </button>
                  </Tab>
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="[
                        'w-full rounded-full py-2.5 text-md font-semibold leading-5 text-peachy-pink-dark',
                        'focus:outline-none focus:ring-0',
                        selected ? 'bg-white shadow' : 'text-peachy-pink-dark hover:bg-white/[0.12] hover:text-white',]">
                      Tools
                    </button>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div class="grid grid-cols-3 grid-rows-2 items-center justify-center gap-7 pt-10 md:grid-cols-5 md:grid-rows-2">
                      <div class="mx-auto">
                        <SkillsLanguagesCSharp/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesC++/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesCss3/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesHtml5/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesJava/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesJavascript/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesPython/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesSql/>
                      </div>
                      <div class="mx-auto">
                        <SkillsLanguagesSwift/>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div class="grid grid-cols-3 grid-rows-2 items-center justify-center gap-7 pt-10 md:grid-cols-5 md:grid-rows-2">
                      <div class="mx-auto">
                        <SkillsFrameworksBootstrap/>
                      </div>
                      <div class="mx-auto">
                        <SkillsFrameworksMaterialUi/>
                      </div>
                      <!-- FIXME: I need a better solution to this icon -->
                      <div class="mx-auto">
                        <SkillsFrameworksNuxtJs/>
                      </div>
                      <div class="mx-auto">
                        <SkillsFrameworksReactJs/>
                      </div>
                      <div class="mx-auto">
                        <SkillsFrameworksTailwindCss/>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>Content 3</TabPanel>
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