import Vue from 'vue'
import App from './App.vue'

import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDX0KnYGvkiyCu1szxJYoB6V1ri6zVs8_s",
    libraries: "places"
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
