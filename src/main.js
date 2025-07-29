import Vue from "vue";
import App from "./App.vue";
import "./assets/base.css"; // 전역 스타일

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
