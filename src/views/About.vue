<template>
  <div class="container">
    <div class="card">
      <h1>List Manager</h1>
      <div class="button-group">
        <button @click="show = !show">{{ show ? "Hide List" : "Show List" }}</button>
        <button @click="list.push(list.length + 1)">Add</button>
        <button @click="list.pop()">Remove</button>
        <button @click="list.reverse()">Reverse</button>
      </div>
      <ul v-if="show && list.length" class="list">
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
      <p v-else-if="list.length">List is hidden.</p>
      <p v-else>No items in the list.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<style scoped>
/* Main container */
.container {
  display: flex;
  align-items: center;
  min-height: 79vh;
  font-family: Arial, sans-serif;

}
</style>

