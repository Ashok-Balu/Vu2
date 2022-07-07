import Vue from 'vue'
import App from './App.vue'
import ValidateForm from './components/ValidateForm.vue'
import AssesmentValidation from './components/AssesmentValidation'
import HttpSample from './components/HttpSample'
import { ValidationProvider, ValidationObserver } from "vee-validate";
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.config.productionTip = false
Vue.component('ValidateForm', ValidateForm);
Vue.component('HttpSample',HttpSample);
Vue.component('AssesmentValidation',AssesmentValidation);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  render: h => h(App),
}).$mount('#app')
