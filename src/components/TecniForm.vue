<template>
  <v-card raised>
    <v-container>
        <v-text-field v-model="name" clearable @input="save" :label="$t('label.name')" prepend-icon="person"/>
        <v-text-field v-model="phone" clearable @input="save" :label="$t('label.phone')" prepend-icon="phone"/>
        <v-text-field v-model="timing" clearable @input="save" :label="$t('label.timing')"  prepend-icon="access_time"/>
        <v-select 
          :items="messageTypes" 
          v-model="choose"
          item-text="value"
          item-value="key"
          prepend-icon="message"
          :label="$t('label.messageType')"
        />
        <v-btn :disabled="!valid" color="red" :href="url" target="_blank">{{$t('button.send')}}</v-btn>
        <v-text-field v-if="valid" disabled auto-grow :label="$t('label.message',{phoneGlobal})" textarea :value="message"/>
      
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      timing: '',
      choose: 'place',
      messageKeys: ['place', 'delay', 'missing', 'reprogram'],
    }
  },
  created() {
    this.name = localStorage.getItem('name') || ''
    //this.phone = localStorage.getItem('phone') || ''
    //this.timing = localStorage.getItem('timing') || ''
  },
  methods: {
    save() {
      localStorage.setItem('name', this.name || '')
      //localStorage.setItem('phone', this.phone || '')
      //localStorage.setItem('timing', this.timing || '')
    },
  },
  computed: {
    messageTypes() {
      return this.messageKeys.map(key => ({
        key,
        value: this.$t(`key.${key}`),
      }))
    },
    valid() {
      if (this.choose === 'cancela' || this.choose === 'ausente' || this.choose === 'reprograma')
        return this.name && this.phone
      return this.name && this.phone && this.timing
    },
    message() {
      return this.$t(`message.${this.choose}`, {
        name: this.name,
        timing: this.timing,
      })
    },
    phoneGlobal() {
      return `34${this.phone.replace(/^\+?34/, '').replace(/\D/g, '')}`
    },
    url() {
      return `https://api.whatsapp.com/send?phone=${this.phoneGlobal}&text=${encodeURI(
        this.message
      )}`
    },
  },
}
</script>

<style>

</style>
