<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<template>
  <main class="wraps">
    <div class="wrap">
      <h2 class="text-xl">Home</h2>
      <p class="mt-2 mb-1">Have a good Day! Everything will be better!</p>
      <button class="btn btn-primary w-max" @click="increment">Counter：{{ count }}</button>
    </div>
  </main>
</template>
