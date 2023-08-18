<template>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />

  <Disclosure
    as="nav"
    class="z-20 bg-cool-green shadow sticky top-0"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-20 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 
            text-cool-green-dark ring-2 ring-inset ring-creamy-beige 
            hover:bg-creamy-beige hover:text-cool-green-dark focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center"
        >
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 text-creamy-beige">
            <NuxtLink
              to="/"
              class="inline-flex items-center px-1 pt-1 text-2xl font-shrikhand 
              hover:border-b-4 hover:border-cool-green-dark hover:text-cool-green-dark 
              focus:border-cool-green-dark focus:text-cool-green-dark"
              :class="{
                'text-cool-green-dark border-b-4 border-cool-green-dark':
                  isActive('/'),
              }"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="inline-flex items-center px-1 pt-1 text-2xl font-shrikhand 
              hover:border-b-4 hover:border-cool-green-dark hover:text-cool-green-dark 
              focus:border-cool-green-dark focus:text-cool-green-dark"
              :class="{
                'text-cool-green-dark border-b-4 border-cool-green-dark':
                  isActive('/about'),
              }"
            >
              About Me
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="inline-flex items-center px-1 pt-1 text-2xl font-shrikhand 
              hover:border-b-4 hover:border-cool-green-dark hover:text-cool-green-dark 
              focus:border-cool-green-dark focus:text-cool-green-dark"
              :class="{
                'text-cool-green-dark border-b-4 border-cool-green-dark':
                  isActive('/projects'),
              }"
            >
              Projects
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Web menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2 text-creamy-beige">
        <NuxtLink
          to="/"
          class="block py-2 pl-3 pr-4 text-2xl font-shrikhand 
          hover:border-l-4 hover:border-cool-green-dark hover:bg-creamy-beige hover:text-cool-green-dark 
          focus:text-cool-green-dark focus:border-cool-green-dark focus:bg-creamy-beige"
          :class="{
            'text-cool-green-dark border-l-4 border-cool-green-dark bg-creamy-beige':
              isActive('/'),
          }"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="block py-2 pl-3 pr-4 text-2xl font-shrikhand
          hover:border-l-4 hover:border-cool-green-dark hover:bg-creamy-beige hover:text-cool-green-dark 
          focus:text-cool-green-dark focus:border-cool-green-dark focus:bg-creamy-beige"
          :class="{
            'text-cool-green-dark border-l-4 border-cool-green-dark bg-creamy-beige':
              isActive('/about'),
          }"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="block py-2 pl-3 pr-4 text-2xl font-shrikhand 
          hover:border-l-4 hover:border-cool-green-dark hover:bg-creamy-beige hover:text-cool-green-dark 
          focus:text-cool-green-dark focus:border-cool-green-dark focus:bg-creamy-beige"
          :class="{
            'text-cool-green-dark border-l-4 border-cool-green-dark bg-creamy-beige':
              isActive('/projects'),
          }"
        >
          Projects
        </NuxtLink>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <div>
    <slot />
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from "vue-router";
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

  // Define the isActive method using useRoute
  const isActive = (route) => {
    const $route = useRoute();
    return $route.path === route;
  };

  // Define the beforeRouteEnter navigation guard
  const beforeRouteEnter = (to, from, next) => {
    if (!to.hash) {
      // Scroll to top of the page on route change
      window.scrollTo(0, 0);

      // Set the active tab to "Home" on initial render
      // You can modify this logic if you're using named routes
      // For example, if your named route for Home is "home"
      if (to.path === "/") {
        // Activate the "Home" tab
        next((vm) => {
          vm.isActive = isActive("/");
        });
      }
    }

    next();
  };
</script>

<script>
import { defineComponent } from "vue";

  export default defineComponent({
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Bars3Icon,
      XMarkIcon,
    },
  });
</script>