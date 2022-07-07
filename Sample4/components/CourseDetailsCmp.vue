<template>
  <div>
    <h4>Course selected: {{ $route.params.id }}</h4>
    <br />
    <button @click="navigateTo">Go back</button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo() {
      this.$router.push({ path: "/training" });
    },
  },
};
</script>
<style></style>
