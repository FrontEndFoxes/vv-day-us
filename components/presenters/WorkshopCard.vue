<template>
  <v-card height="200px">
    <v-list>
      <v-list-item :key="workshop.id">
        <v-list-item-avatar size="100">
          <v-img :src="workshop.photo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <h3>{{ workshop.name }}</h3>

          <h4>{{workshop.talkTitle}}</h4>
          <p v-if="workshop.id == 2" style="padding-top:5px;font-style:italic">* women only</p>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  methods: {
    openWorkshopLink() {
      window.open(this.workshop.twitterUrl, '_blank')
    }
  },
  props: {
    workshop: { type: Object, required: true }
  }
}
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}
</style>