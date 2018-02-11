<template>
    <v-btn-toggle v-model="selected" @change="setLocale">
      <v-btn 
        v-for="(lang,index) in langs"
        :key="lang"
        :primary="index==selected"
        color="red"
      >{{lang}}</v-btn>
    </v-btn-toggle>
</template>

<script>
export default {
  data() {
    return {
      selected: -1,
      langs: [],
    }
  },
  watch: {
    '$i18n.locale'(current) {
      this.sync(current)
    },
  },
  created() {
    this.langs = Object.keys(this.$i18n.messages)
    this.sync(this.$i18n.locale)
  },
  methods: {
    sync(lang) {
      this.selected = this.langs.indexOf(lang)
    },
    setLocale() {
      this.$i18n.locale = this.langs[this.selected]
    },
  },
}
</script>

<style>

</style>
