<template>
  <v-row no-gutters justify-center align-center>
    <v-col no-gutters>
      <VVHeroImageContainer class="text-center header-image" :image="HEADER_IMAGE">
        <div class="content">
          <VVLogo class="homepage-logo" />
          <h1 class="vv-heading where-header">Austin, TX</h1>
          <h1 class="vv-subheading when-header">March 5, 2020</h1>
          <h2
            class="vv-subtitle"
            style="margin-top: 10px;"
          >A free one-day conference presented by foxy people who identify as women.</h2>
        </div>
      </VVHeroImageContainer>
      <section class="vv-cta-buttons">
        <VVCtaButton link :href="REGISTRATION_URL" target="_blank">Register</VVCtaButton>
        <VVCtaButton link :href="SPONSOR_URL" target="_blank">Sponsor</VVCtaButton>
        <VVCtaButton link :href="FAQ_URL">FAQ</VVCtaButton>
      </section>
      <v-col cols="8" class="content-container">
        <VVPresenters>
          <template #header>
            <h1>Meet our Presenters</h1>
          </template>
        </VVPresenters>
      </v-col>
      <VVSponsors class="pt-10 pb-10 grey lighten-2">
        <template #header>
          <h2>Sponsors</h2>
        </template>
      </VVSponsors>
    </v-col>
  </v-row>
</template>

<script>
import VVHeroImageContainer from '../components/HeroImageContainer'
import VVCtaButton from '../components/CtaButton'
import VVLogo from '../components/Logo'
import VVPresenters from '../components/presenters/Presenters'

import VVSponsors from '../components/Sponsors'
import {
  REGISTRATION_URL,
  CFP_URL,
  FAQ_URL,
  SPONSOR_URL,
  HEADER_IMAGE
} from '../constants'

export default {
  components: {
    VVHeroImageContainer,
    VVCtaButton,
    VVLogo,
    VVSponsors,
    VVPresenters
  },
  computed: {
    HEADER_IMAGE() {
      return HEADER_IMAGE
    },
    REGISTRATION_URL() {
      return REGISTRATION_URL
    },
    CFP_URL() {
      return CFP_URL
    },
    FAQ_URL() {
      return FAQ_URL
    },
    SPONSOR_URL() {
      return SPONSOR_URL
    }
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 2.7rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.7rem;
}
h4 {
  font-size: 1.2rem;
}

h1,
h2,
h3,
h4 {
  font-weight: 500;
  font-family: 'Futura-CondensedMedium', 'Helvetica Neue', Arial, sans-serif !important;
  color: #34485d;
  text-align: center;
}

.header-image {
  width: 100%;
  height: 60vh;
  min-height: 490px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  div {
    color: #fff;
  }
}

.content {
  padding-top: 2vh;
}

.content-container {
  max-width: 100vw;
  margin: 10px auto 0;
  @media (max-width: 800px) {
  }

  @media (min-width: 1200px) {
    max-width: 1100px;
  }

  & > section:not(:first-child) {
    margin: 20px auto 0;
  }
}

.homepage-logo {
  $width: 150px;

  width: $width;

  // Offset the fox logo, because the bottom of the Vue triangle should be centered
  // and the fox tail throws it off by 20%
  margin-left: -#{$width * 0.2};
}

.vv-subtitle {
  font-family: 'Futura-MediumItalic', 'Helvetica Neue', Arial, sans-serif;
  font-style: italic;
  font-weight: 400;
  max-width: 390px;
  font-size: 1.2rem;
  margin: 20px auto 0;
}

.vv-heading.where-header {
  font-size: 4.2rem;
}

.vv-subheading.when-header {
  font-size: 2.1rem;
}

.vv-heading,
.vv-subheading {
  &.when-header,
  &.where-header {
    margin-bottom: 25px;
    font-family: 'Futura-CondensedMedium', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
}

.vv-cta-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  max-width: 830px;
  margin: -80px auto 0;
}
</style>
