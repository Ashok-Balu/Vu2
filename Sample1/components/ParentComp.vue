<template>
    <div>
        
    <p>Rendered from Parent component!</p>
    <hr />
    <ValidateCmp
      :skill="skills"
      :empObj="empDetails"
      :id="empId"
      :dc="location"
    />
    <hr />
 </div>
</template>

<script>
import ValidateCmp from './ValidateCmp.vue';
    export default {
    components: { 
        ValidateCmp ,
     },
     data() {
        return {
        empId: 681592,
        empDetails: { name: "Samual", unit: "Technical" },
        skills: ["React"],
        location: "Mysore",
    };
  },
}
</script>

<style scoped>

</style>