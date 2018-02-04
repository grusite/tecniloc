<template>
  <v-card raised>
    <v-container>
        <v-text-field v-model="name" clearable @input="save" label="Nombre" prepend-icon="person"/>
        <v-text-field v-model="phone" clearable @input="save" label="Teléfono" prepend-icon="phone"/>
        <v-text-field v-model="timing" clearable @input="save" label="Tiempo estimado"  prepend-icon="access_time"/>
        <v-layout>
          <v-flex md12 xs12 offset-md1>
            <v-radio-group v-model="choose" row>
              <v-radio label="Ubicación" box color="blue" value="ubicacion" ></v-radio>
              <v-radio label="Retraso" color="yellow" value="retraso"></v-radio>
              <v-radio label="Cancela" color="red" value="cancela"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
        <v-text-field v-if="valid" disabled auto-grow :label="`Mensaje para ${phoneGlobal}`" textarea :value="message"/>
        <v-btn :disabled="!valid" color="red" :href="url" target="_blank">Enviar</v-btn>
      
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
      choose: 'ubicacion',
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
      if (this.choose === 'cancela') return this.name && this.phone
      return this.name && this.phone && this.timing
    },
    messageUbicacion() {
      return `Hola,\nsoy ${
        this.name
      } su técnico de la empresa colaboradora de Vodafone, le indico cuál es mi ubicación en tiempo real para que esté informado en todo momento. Mi estimación de llegada a su domicilio es de ${
        this.timing
      }.\n\nMuchas gracias`
    },
    messageRetraso() {
      return `Hola,\nsoy ${
        this.name
      } su técnico de una empresa colaboradora de Vodafone. Voy a llegar mas tarde de lo previsto. Retrasamos su instalación ${
        this.timing
      }.\n\nDisculpe las molestias`
    },
    messageCancela() {
      return `Hola,\nsoy ${
        this.name
      }  su técnico de una empresa colaboradora de Vodafone. No va a ser posible realizar su instalación hoy. En breve nos pondremos en contacto con usted para darle nueva cita.\n\nDisculpe las molestias`
    },
    message() {
      if (this.choose === 'ubicacion') return this.messageUbicacion
      else if (this.choose === 'retraso') return this.messageRetraso
      else if (this.choose === 'cancela') return this.messageCancela
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
