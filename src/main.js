import mock from './mock_data.js'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

let data = {
  defaultWords: mock,
  usedWords: []
}


Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
