<template>
  <div :style="{ marginLeft: '2%' }">
    <h2>UI & Markup Technology</h2>
    <br />
    <router-link to="/">Home </router-link> |
    <router-link to="/about">About us </router-link> |
    <router-link to="/training">Training </router-link> |
    <router-link to="/contact">Contact us </router-link> 
    
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
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
