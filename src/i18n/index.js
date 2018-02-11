import Vue from 'vue'
import VueI18n from 'vue-i18n'

import es from './es.yml'
import ca from './ca.yml'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  messages: { es, ca },
})

export default i18n

if (module.hot) {
  module.hot.accept(['./es.yml', './ca.yml'], function() {
    i18n.setLocaleMessage('es', require('./es.yml'))
    i18n.setLocaleMessage('ca', require('./ca.yml'))
  })
}
