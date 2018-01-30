<template>
  <v-app>
      <v-toolbar color="red" fixed app>
        <v-toolbar-title>Vodafone tecnicos</v-toolbar-title>
      </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex md6 offset-md3>
            <tecni-form/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TecniForm from './components/TecniForm'
export default {
  name: 'app',
  components: { TecniForm },
}
</script>

<style>

</style>
