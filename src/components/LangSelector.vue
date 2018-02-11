<template>
    <!-- <v-btn-toggle v-model="selected" @change="setLocale">
      <v-btn 
        v-for="(lang,index) in langs"
        :key="lang"
        depressed
        flat
        :color="index!==selected ? 'red' : 'primary'"
      >{{lang}}</v-btn>
    </v-btn-toggle> -->
    <v-menu bottom left>
      <v-btn icon slot="activator" color="white">
        <!-- <v-icon>more_vert</v-icon> -->
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
export default {
  data() {
    return {
      icons: { es, ca },
      langs: [],
    }
  },
  created() {
    this.langs = Object.keys(this.$i18n.messages)
  },
  methods: {
    changeTo(locale) {
      this.$i18n.locale = locale
    },
  },
}
</script>

<style>

</style>
