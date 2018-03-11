<template>
    <v-menu bottom left>
      <v-btn icon slot="activator" color="white">
        <img :src="icons[$i18n.locale]">
      </v-btn>
      <v-list>
        <v-list-tile v-for="lang in langs" :key="lang" @click="changeTo(lang)">
          <v-list-tile-title>
            <img :src="icons[lang]">
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
</template>

<script>
import es from '@/assets/es.png'
import ca from '@/assets/ca.png'
import lowi from '@/assets/lowi.png'
export default {
  data() {
    return {
      icons: { es, ca, lowi },
      langs: [],
    }
  },
  created() {
    this.langs = Object.keys(this.$i18n.messages)
    let saved = window.localStorage.getItem('locale')
    if (saved) this.changeTo(saved)
  },
  methods: {
    changeTo(locale) {
      this.$i18n.locale = locale
      window.localStorage.setItem('locale', locale)
    },
  },
}
</script>

<style>

</style>
