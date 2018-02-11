<template>
  <div>
      current: {{ $i18n.locale }}
      <v-btn 
        v-for="lang in langs"
        :key="lang"
        @click="changeTo(lang)"
        :primary="$i18n.locale==lang"
      >
        {{lang}}
      </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ['es', 'ca'],
    }
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
