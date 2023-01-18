/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./views/app-view/App.vue";
import router from "./router";
import store from "./store";
import "./axios";
// import { index } from "./store/index";
import Vuex from "vuex";

Vue.use(Vuex);
import "jquery";

import "normalize.css";

import "../src/assets/fontawesome-free-6.2.0-web/css/all.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
Vue.config.productionTip = false;

import "./scss/main.scss";

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

Vue.component("vue-phone-number-input", VuePhoneNumberInput);
