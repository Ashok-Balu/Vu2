import Vue from 'vue'
import App from './App.vue'
import directiveCmp from './components/directiveCmp.vue'

Vue.config.productionTip = false
Vue.component('directiveCmp',directiveCmp);

//Passing a value
Vue.directive("colorIt", {
  bind(el) {
    el.style.color = "blue";
  },
});

//Passing an argument:
Vue.directive("colorIt1", {
  bind(el, binding) {
    if (binding.arg == "color") {
      el.style.color = binding.value;
      el.style.fontFamily = "verdana";
    } else {
      el.style.color = "blue";
    }
  },
});

//Passing modifier:
Vue.directive("colorIt2", {
  bind(el, binding) {
    if (binding.modifiers["shadow"]) {
      el.style.textShadow = "5px 7px 5px grey";
    }
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')
