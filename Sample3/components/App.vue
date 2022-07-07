<template>
  <div :style="{ marginLeft: '2%' }">
    <h2>Vue-resource for server communication</h2>
    <hr />
    <HttpCmp />
  </div>
</template>

<script>
import HttpCmp from './components/HttpCmp.vue';
export default {
  name: 'App',
  components: {
    HttpCmp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
