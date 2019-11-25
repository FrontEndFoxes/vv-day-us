<template>
  <v-app-bar class="vv-toolbar" color="primary darken-1" dark fixed app>
    <nuxt-link tag="v-toolbar-title" class="vv-logo" to="/">
      <img src="~/assets/images/logo.png" alt="VueVixens Logo" /> Vue Vixens Day US 2020
    </nuxt-link>
    <div class="spacer"/>
    <v-toolbar-title class="vv-logo">
      <a href="https://workshops.vuevixens.org/workshop/CODE_OF_CONDUCT.html" class="vv-logo" style="color: white;">
        Code of Conduct
      </a>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
  //
export default {}
</script>

<style scoped lang="scss">
.vv-logo {
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
  img {
    max-width: 40px;
    margin-right: 10px;
  }
}

.vv-toolbar {
  z-index: 5;
}
</style>
