<template>
    <!-- TODO: Style -->
    <Disclosure as="nav" class="bg-peachy-pink shadow sticky top-0" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8"> 
              <!-- FIXME: Adjust the nav tabs so that upon reload the active tab is still highlighted -->
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              
              <NuxtLink class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-shrikhand text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-indigo-500 focus:text-gray-900" to="/">Home</NuxtLink>
              <NuxtLink class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-shrikhand text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-indigo-500 focus:text-gray-900" to="/about">About Me</NuxtLink>
              <NuxtLink class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-shrikhand text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-indigo-500 focus:text-gray-900" to="/projects">Projects</NuxtLink>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- THIS IS A DIV FOR THE RIGHT SIDE OF THE NAV MAYBE USE FOR LATER -->
          </div>
        </div>
      </div>

      <!-- FIXME: Change these to NuxtLinks -->
      <!-- FIXME: Adjust the nav tabs so that upon reload the active tab is still highlighted -->
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-4 pt-2">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton as="a" href="/" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-shrikhand text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 focus:text-indigo-700 focus:border-indigo-500 focus:bg-indigo-50">Home</DisclosureButton>
          <DisclosureButton as="a" href="/about" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-shrikhand text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 focus:text-indigo-700 focus:border-indigo-500 focus:bg-indigo-50">About Me</DisclosureButton>
          <DisclosureButton as="a" href="/projects" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-shrikhand text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 focus:text-indigo-700 focus:border-indigo-500 focus:bg-indigo-50">Projects</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div>
      <slot />
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>