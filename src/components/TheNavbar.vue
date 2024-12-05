<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav class="bg-gray-800 text-white flex items-center px-10 py-3">
      <h2 class="text-2xl font-bold">LOGO</h2>
      <ul class="flex ml-auto space-x-8 text-primary">
        <li>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
li {
  position: relative;
}

li::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s;
}

li:hover::before {
  width: 100%;
}
</style>
