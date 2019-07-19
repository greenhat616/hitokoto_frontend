<template>
  <a-layout class="home-layout">
    <!--Home Header-->
    <home-header  />
    <nuxt />
    <fixed-player />
  </a-layout>
</template>
<script>
import homeHeader from '~/components/homeHeader.vue'
import fixedPlayer from '~/components/fixedPlayer.vue'
export default {
  components: {
    homeHeader,
    fixedPlayer
  }
}
</script>
