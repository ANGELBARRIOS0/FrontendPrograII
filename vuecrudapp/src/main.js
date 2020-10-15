import Vue from 'vue'
import App from './App.vue'
import 'semantic-ui-css/semantic.css'
import Router from './Router.js'

new Vue({
  render: h => h(App),
  'router': Router,
}).$mount('#app')
