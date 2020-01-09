<template>
  <v-card max-width="450" class="mx-auto">
    <v-list three-line>
      <v-list-item :key="lightning.id" @click>
        <v-list-item-avatar size="100">
          <v-img :src="lightning.photo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="lightning.name"></v-list-item-title>
          <v-list-item-subtitle v-html="lightning.talkTitle"></v-list-item-subtitle>
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
