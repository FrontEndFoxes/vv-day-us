<template>
  <section>
    <slot name="header" />
    <h2>Opening Keynote</h2>
    <v-row justify="center">
      <v-col
        v-for="presenter in presenters"
        :key="presenter.id"
        style="max-width: 300px"
        height="300px"
        text-align="center"
        justify="center"
        v-if="presenter.keynote && presenter.opener"
      >
        <VVPresenterCard :presenter="presenter" />
      </v-col>
    </v-row>
    <h2>Speakers</h2>

    <v-row justify="center">
      <v-col
        cols="6"
        md="2"
        v-for="presenter in presenters"
        style="max-width: 300px"
        :key="presenter.id"
        text-align="center"
        justify="center"
        v-if="!presenter.keynote"
      >
        <VVPresenterCard :presenter="presenter" />
      </v-col>
    </v-row>
    <h2>Lightning Talks</h2>

    <v-row justify="center">
      <v-col
        cols="6"
        md="2"
        v-for="lightning in lightnings"
        style="max-width: 300px"
        :key="lightning.id"
        text-align="center"
        justify="center"
      >
        <VVLightningCard :lightning="lightning" />
      </v-col>
    </v-row>

    <h2>Closing Keynote</h2>
    <v-row justify="center">
      <v-col
        v-for="presenter in presenters"
        :key="presenter.id"
        style="max-width: 300px"
        height="300px"
        text-align="center"
        justify="center"
        v-if="presenter.keynote && presenter.closer"
      >
        <VVPresenterCard :presenter="presenter" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { PRESENTERS_DATA } from '../../constants'
import VVPresenterCard from './PresenterCard'
import { LIGHTNINGS_DATA } from '../../constants'
import VVLightningCard from './LightningCard'

export default {
  components: { VVPresenterCard, VVLightningCard },
  computed: {
    presenters() {
      return PRESENTERS_DATA || []
    },
    lightnings() {
      return LIGHTNINGS_DATA || []
    }
  }
}
</script>
