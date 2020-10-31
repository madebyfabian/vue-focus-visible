import Vue from 'vue'
import App from './App.vue'

import FocusVisible from '../vue-focus-visible'
Vue.use(FocusVisible)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
