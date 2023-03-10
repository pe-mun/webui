<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import HelloWorld from './components/HelloWorld.vue'

const navigation = [
  { name: 'Sobre', href: '/about', current: true },
  { name: 'Time', href: '/', current: false },
  { name: 'Eventos', href: '/', current: false },
  { name: 'Comitês', href: '/', current: false },
  { name: 'Contato', href: '/', current: false },
  { name: 'Arquivos', href: '/', current: false },
]

</script>

<template>
  <header class="relative w-screen">
    <nav id="navigation" class="py-4 px-6 text-lg font-medium ">
      <ul class="flex space-x-3 justify-center mr-auto">
       <RouterLink v-for="navitem in navigation" :key="navitem.name" :to="navitem.href" :class="['block px-3 py-2 rounded-md ']">{{navitem.name}}</RouterLink>
      </ul>
    </nav>
<!-- 
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

     <div class="wrapper">
      <HelloWorld msg="You did it!" /> 
    -->
<!--
      <nav>
      </nav>
    </div>
-->
  </header>

  <RouterView />
</template>

<style scoped>
.menu {
    white-space: nowrap;
    font-size: .875rem;
    font-weight: 700;
    text-transform: uppercase;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    width: 100%;
    padding: 0.75rem 0.25rem;
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .5s;
}
</style>
