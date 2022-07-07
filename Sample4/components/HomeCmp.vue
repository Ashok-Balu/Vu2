<template>
 <div>
    <img :src="image" />
    <router-view></router-view>
    <button @click="navigateTo">More details</button>
  </div>
</template>
<script>
import image from "./../assets/UI.png";
export default {
  data: function () {
    return {
      image: image,
    };
  },
  methods:{
    navigateTo(){
      this.$router.push({path:"training"})
      //programmatic navigation
      // $push methods is used to programmaticaly navigate 
      // It navigate from homecomponent to training component
    }
  }
};
</script>
<style></style>
