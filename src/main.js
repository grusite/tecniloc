import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import i18n from './i18n'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
})
