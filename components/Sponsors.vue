<template>
  <section>
    <slot name="header" />
    <h3>Platinum</h3>
    <v-row justify="center">
      <v-col
        v-for="sponsor in sponsors"
        v-if="sponsor.level == 'platinum'"
        :key="sponsor.name"
        style="max-width: 300px; height: 100px"
        text-align="center"
        justify="center"
      >
        <v-card white p-10 @click="goToSponsor(sponsor.link)">
          <v-img :src="sponsor.logo" />
        </v-card>
      </v-col>
    </v-row>
    <h3>Silver</h3>
    <v-row justify="center">
      <v-col
        v-for="sponsor in sponsors"
        v-if="sponsor.level == 'silver'"
        :key="sponsor.name"
        style="max-width: 300px; height: 100px"
        text-align="center"
        justify="center"
      >
        <v-card white p-10 @click="goToSponsor(sponsor.link)">
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
  },
  methods: {
    goToSponsor(link) {
      window.open(link, '_blank')
    }
  }
}
</script>
