import Vue from "vue";
import App from "./App.vue";
import store from './store';
import router from './router';
import modal from './plugins/ModalWindow';
import edit from './plugins/EditWindow';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

Vue.use(modal);
Vue.use(edit);

new Vue({
  render: (h) => h(App),
  store,
  vuetify,
  router
}).$mount("#app");