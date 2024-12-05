<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const { doubleCount } = useCounterStore()
</script>

<template>
  <main class="wraps">
    <div class="wrap">
      <h2 class="text-xl">About</h2>
      <p class="mt-2 mb-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde vel rerum est?</p>
      <div>Dobule Counter：{{ doubleCount }}</div>
    </div>
  </main>
</template>
