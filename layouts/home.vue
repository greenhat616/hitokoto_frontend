<template>
  <a-layout>
    <!--Home Header-->
    <home-header :current="current" />
    <nuxt v-on:menuSelected="handleCurrent" />
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
