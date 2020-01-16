<template>
  <v-card>
    <v-list>
      <v-list-item :key="workshop.id" @click>
        <v-list-item-avatar size="100">
          <v-img :src="workshop.photo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <h3>{{ workshop.name }}</h3>

          <h4>{{workshop.talkTitle}}</h4>
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
  margin-bottom: 5px;
}
