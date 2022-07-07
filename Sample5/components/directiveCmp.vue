<template>
  <div>
   
    <h4>Employee Details</h4>

     Passing a value
    <p v-colorIt>{{ empName }}</p>
    <br>
     Passing an argument:
    <p v-colorIt1:color="'orange'">{{empId}}</p>
    <br>
    Passing modifier:
    <p v-colorIt2:color.shadow="'orange'">{{unit}}</p>
    <br>
    filters
    <p>{{empName|uppercase}}</p>
    <br>
    chaining of filters<br>
    {{'10'|currency}}<br>
    {{'600'|discount(15)}}


  </div>
</template>
<script>
export default {
  name: "directiveCmp",
  data: function() {
    return {
      empName: "Samual",
      empId: 681592,
      unit: "Technical",
    };
  },
  filters: {
      uppercase: function (value) {
        return value.toUpperCase()
    },
      currency:function (value){
        return 'USD.'+value;
     },
      Discount:function(value,discount){
        return value *((100-discount)/100)
    }
  }
};
</script>
<style>
</style>

