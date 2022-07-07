<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <span class="navbar-brand">Flight Booking</span>
        </li>
        <li class="nav-item">
          <router-link name="viewDetails" to="/bookFlight" class="nav-link">Book Flight</router-link>
        </li>
        <li class="nav-item">
          <router-link name="viewDetails" to="/flightDetails" class="nav-link">View Details</router-link>
        </li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Router from "./router/index";
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      showGuidelines: true
    };
  },
  methods: {
    showWelcomeCmp: function() {
      this.showGuidelines = false;
      Router.push({ name: "bookFlight" });
    }
  }
};
</script>
<style>
.allign {
  text-align: center;
  color: rgb(121, 16, 16);
}
</style>
