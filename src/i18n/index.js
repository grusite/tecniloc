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
