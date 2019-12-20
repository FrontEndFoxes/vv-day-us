<template>
  <section>
    <slot name="header" />
    <v-row justify="center">
      <v-col
        v-for="sponsor in sponsors"
        :key="sponsor.name"
        style="max-width: 300px; height: 100px"
        text-align="center"
        justify="center"
      >
        <v-card white height="100%" p-10>
          <v-img :src="sponsor.logo" />
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { SPONSORS_DATA } from '../constants'

export default {
  computed: {
    sponsors() {
      return SPONSORS_DATA || []
    }
  }
}
</script>
