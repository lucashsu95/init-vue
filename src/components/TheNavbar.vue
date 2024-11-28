<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div>
    <nav class="navbar">
      <ul>
        <li @click="navigateTo('/')">Home</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  float: left;
  display: inline;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}

.navbar li:hover {
  background-color: #ddd;
  color: black;
}
</style>
