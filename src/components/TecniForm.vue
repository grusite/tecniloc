<template>
  <v-card raised>
    <v-container>
      <v-text-field v-model="name" clearable @input="save" label="Nombre" prepend-icon="person"/>
      <v-text-field v-model="phone" clearable @input="save" label="Teléfono" prepend-icon="phone"/>
      <v-text-field v-model="timing" clearable @input="save" label="Tiempo estimado"  prepend-icon="access_time"/>
      <v-btn :disabled="!valid" color="red" :href="url" target="_blank">Enviar mensaje</v-btn>
      <v-text-field v-if="valid" disabled auto-grow :label="`Mensaje para ${phoneGlobal}`" textarea v-model="message"/>
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
    }
  },
  created() {
    this.name = localStorage.getItem('name') || ''
    this.phone = localStorage.getItem('phone') || ''
    this.timing = localStorage.getItem('timing') || ''
  },
  methods: {
    save() {
      localStorage.setItem('name', this.name || '')
      localStorage.setItem('phone', this.phone || '')
      localStorage.setItem('timing', this.timing || '')
    },
  },
  computed: {
    valid() {
      return this.name && this.phone && this.timing
    },
    message() {
      return `Hola, soy ${
        this.name
      } su técnico de la empresa colaboradora de Vodafone, le indico cuál es mi ubicación en tiempo real para que esté informado en todo momento. Mi estimación de llegada a su domicilio es de ${
        this.timing
      }.\nMuchas gracias`
    },
    url() {
      return `https://api.whatsapp.com/send?phone=${this.phoneGlobal}&text=${encodeURI(
        this.message
      )}`
    },
    phoneGlobal() {
      return `34${this.phone.replace(/^\+?34/, '').replace(/\D/g, '')}`
    },
  },
}
</script>

<style>

</style>
