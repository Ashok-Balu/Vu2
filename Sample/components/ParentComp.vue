<template>
  <div>
   <p>Click here to register for the training</p>
    <button @click="handleClick">Register</button>
    {{ msg }}
    <hr />
    <!-- <ChildComp :msgReceived="msg" @msgGotReset="emitterFunction" />  (or) -->
    <ChildComp :msgReceived="msg" @msgGotReset="msg=$event" />
    <!-- They are two methods as above  one using function as (1) and used as event in (2)-->
    <!-- props and emit in same example -->
    <!-- @msgGotReset(custom event), Here @ is used for connecting with emit in children -->
    <!-- "msg=$event" we align the message from child and align to msg -->

    <hr />
  </div>
</template>

<script>
  import ChildComp from './ChildComp.vue';
  export default {
    name:"ParentComp",
    components: {
      ChildComp
    },
    data: function () {
    return { msg: "" };
  },
  methods: {
    handleClick() {
      this.msg = "Registered!!";
    },
    // emitterFunction(name){
    //   this.msg=name;
    // }
  },
  }
</script>
<style scoped>

</style>
