<template>
  <a-layout>
    <common-header :current="current" />
    <nuxt v-on:menuSelected="handleCurrent" />
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
  },
  data() {
    return {
      current: []
    }
  },
  methods: {
    handleCurrent(data) {
      this.current = data
    }
  }
}
</script>
