<template>
  <div>
    <p>Training registration status: {{ msgReceived }}</p>
    <button @click="resetVal">Reset</button>
  </div>
</template>
<script>
  export default {
    name: "ChildComp",
    props: ["msgReceived"],
    methods: {
    resetVal: function () {
      //this.msgReceived = "Cancelled";
      this.$emit('msgGotReset', "Cancelled");
    },
  },
  };
</script>
<style scoped>
 h3 {
  color: orange;
  font-family: arial;
}
</style>
