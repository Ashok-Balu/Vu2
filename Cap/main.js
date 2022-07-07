import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueResource from "vue-resource";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(vueResource);



new Vue({
  render: h => h(App),
  router
}).$mount("#app");
