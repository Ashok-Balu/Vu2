import Vue from "vue";
import Router from "vue-router";
import bookFlight from "@/components/bookFlight";
import flightDetails from "@/components/flightDetails";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/bookFlight",
      name: "bookFlight",
      component: bookFlight
    },
    {
      path: "/flightDetails",
      name: "flightDetails",
      component: flightDetails
    }
  ]
});
