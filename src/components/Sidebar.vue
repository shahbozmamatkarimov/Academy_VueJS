<template>
  <header>
    <nav class="p-5 pr-0 text-white">
      <div class="py-5 flex">
          <svg
            class="absolute"
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="16" fill="#FB7D5B" />
          </svg>
          <svg
            class="z-10 absolute mx-[10px] my-2"
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.964 21.536H8.532L7.02 26H0.576L9.72 0.727999H16.848L25.992 26H19.476L17.964 21.536ZM16.38 16.784L13.248 7.532L10.152 16.784H16.38Z"
              fill="white"
            />
          </svg>
          <h1 class="font-extrabold ml-14 text-3xl">Academy</h1>
      </div>
      <div class="h-full pl-3 py-4 overflow-y-auto dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2 pl-5 text-gray-900 rounded-l-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i class="text-2xl text-[#C1BBEB]" :class="link.icon"></i>
              <span class="ml-3 text-[#C1BBEB]">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>

        <button
          @click="logout"
          class="block bg-red-500 px-3 py-2 rounded-xl focus:ring-4 ring-gray-500 text-white absolute bottom-3"
        >
          Chiqish
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { navLinks } from '../constants/navlinks'
const navlink = ref(navLinks)
</script>

<style lang="scss" scoped>
.router-link-active {
  background: #FFF;
  i, span{
    color: #4D44B5;
  }
}
</style>