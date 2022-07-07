<template>
  <div :style="{ marginLeft: '2%' }">
    <h2>Passing data from child to parent</h2>
    <hr />
    <h3 class="content">From Root component</h3>
    <ParentComp/> 
  </div>
</template>

<script>

import ParentComp from './components/ParentComp.vue'
export default {
  name: 'App',
  components: {
    ParentComp
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
