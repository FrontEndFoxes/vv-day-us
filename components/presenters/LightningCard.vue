<template>
  <v-card height="200px">
    <v-list>
      <v-list-item :key="lightning.id">
        <v-list-item-avatar size="80">
          <v-img :src="lightning.photo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <h3 v-html="lightning.name"></h3>
          <h4 v-html="lightning.talkTitle"></h4>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  methods: {
    openLightningLink() {
      window.open(this.lightning.twitterUrl, '_blank')
    }
  },
  props: {
    lightning: { type: Object, required: true }
  }
}
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}
</style>