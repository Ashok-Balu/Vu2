<template>
  <div :style="{ marginLeft: '2%' }">
    <h2>Validating props</h2>
    <hr />
    <ParentComp />
    <hr />
    <h2>Handling form</h2>
    <hr>
    <FormComp />
    <hr>
  </div>
</template>

<script>
import ParentComp from './components/ParentComp.vue';
import FormComp from './components/FormComp.vue';



export default {
  name: 'App',
  components: {
    ParentComp,
    FormComp,
   
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
