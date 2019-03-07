import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://axios-40fb5.firebaseio.com/";
axios.defaults.headers.get["Accepts"] = "custom-applications/json";

const reqInterceptors = axios.interceptors.request.use(config => {
  console.log("Request interceptos:", config);
  return config;
});

const resInterceptors = axios.interceptors.response.use(res => {
  console.log("Response interceptos:", res);
  return res;
});

axios.interceptors.request.eject(reqInterceptors);
axios.interceptors.response.eject(resInterceptors);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
