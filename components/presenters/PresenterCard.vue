<template>
  <v-card @click="openPresenterLink">
    <v-img :src="presenter.photo" :alt="`Photo of {{ presenter.name }}`"></v-img>

    <h2>{{ presenter.name }}</h2>

    <v-card-subtitle>{{ presenter.talkTitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  methods: {
    openPresenterLink() {
      window.open(this.presenter.twitterUrl, '_blank')
    }
  },
  props: {
    presenter: { type: Object, required: true }
  }
}
</script>
