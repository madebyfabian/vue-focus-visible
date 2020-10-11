import Vue from 'vue'
import App from './App.vue'
import { A11yFocusUtil } from './A11yFocusUtil'

Vue.config.productionTip = false

Vue.use(A11yFocusUtil)

new Vue({
  render: h => h(App),
}).$mount('#app')
