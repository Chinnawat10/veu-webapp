<script setup>
import myBar from '@/views/MyBar.vue';
</script>
<template>
  <div id="app">
    <myBar />
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  components : {
    myBar,
  },
};
</script>
<style scoped>
section {
  padding: 16px 24px;
  background: #ff0000;
  width: 100%;
  margin-right: 24px;
}

</style>