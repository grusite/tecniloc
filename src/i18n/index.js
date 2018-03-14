import Vue from 'vue'
import VueI18n from 'vue-i18n'

import es from './es.yml'
import ca from './ca.yml'
import lowi from './lowi.yml'
import lowi_ca from './lowi_ca.yml'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  messages: { es, ca, lowi, lowi_ca },
})

export default i18n

if (module.hot) {
  module.hot.accept(['./es.yml', './ca.yml', './lowi.yml', './lowi_ca.yml'], function() {
    i18n.setLocaleMessage('es', require('./es.yml'))
    i18n.setLocaleMessage('ca', require('./ca.yml'))
    i18n.setLocaleMessage('lowi', require('./lowi.yml'))
    i18n.setLocaleMessage('lowi_ca', require('./lowi_ca.yml'))
  })
}
