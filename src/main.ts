import Vue from 'vue'
import App from './App.vue'
import { VueFocusVisible } from './VueFocusVisible'

Vue.config.productionTip = false

Vue.use(VueFocusVisible)

new Vue({
  render: h => h(App),
}).$mount('#app')
