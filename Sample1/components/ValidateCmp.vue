<template>
    <div>
    <p>
      I'm from ValidateCmp - received below props from Parent and validated<br /><br />
      {{ skill }}<br />
      {{ empObj}} <br />
      {{ id }} <br />
      {{ dc }}
    </p>
  </div>
</template>

<script>
    export default {
    name: "ValidateCmp",
    props: {
        skill:{
          type:Array,
          required:true,
          //default: ["vue"],
        } ,
         empObj:{
          type:Object,
          required:true,
          // default:
          //  { name: "Ashok", 
          //    unit: "Technical" },
         } , 
         id: Number,
         dc: {
           type:String,
            required:true,
            default:'hii', 
         }
    }
    }
</script>

<style scoped>
h3 {
  color: orange;
  font-family: arial;
}
</style>