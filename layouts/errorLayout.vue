<template>
  <div>
    <nuxt />
    <fixed-player />
  </div>
</template>
<script>
import moment from 'moment'
import 'moment/locale/zh-cn'
import fixedPlayer from '~/components/fixedPlayer.vue'
moment.locale('zh-cn')

export default {
  components: {
    fixedPlayer
  }
}
</script>
