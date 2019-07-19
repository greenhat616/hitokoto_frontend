<template>
  <a-layout>
    <common-header />
    <nuxt />
    <fixed-player />
  </a-layout>
</template>
<script>
import commonHeader from '~/components/commonHeader.vue'
import fixedPlayer from '~/components/fixedPlayer.vue'
export default {
  components: {
    commonHeader,
    fixedPlayer
  }
}
</script>
