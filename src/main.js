import mock from './mock_data.js'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

let data = {
  defaultWords: mock,
}

let methods = {
  noun() {
    let nouns = data.objects;
    let index = Math.random() % nouns.length;
    return nouns[index];
  },
  name() {
    let names = data.names;
    let index = Math.random() % names.length;
    return names[index];
  }
}


Vue.config.productionTip = false;

new Vue({
  router,
  data,
  methods,
  render: (h) => h(App),
}).$mount("#app");
