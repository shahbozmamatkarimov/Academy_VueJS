<template>
  <main>
    <section class="flex">
      <div class="w-[300px] min-h-screen border bg-[#4D44B5]">
        <Sidebar />
      </div>
      <div class="bg-[#F3F4FF] max-h-screen w-full overflow-y-scroll">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Sidebar } from '../components'
</script>
<style></style>