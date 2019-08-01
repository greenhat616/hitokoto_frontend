<template>
  <a-locale-provider :locale="locale">
    <a-layout :class="isDashboardRoute ? 'ant-layout-dashboard' : ''">
      <common-header />
      <nuxt />
      <fixed-player />
    </a-layout>
  </a-locale-provider>
</template>
<style lang="less">
  .ant-layout-dashboard {
    background: #ffffff;
  }
</style>
<script>
import moment from 'moment'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import commonHeader from '~/components/commonHeader.vue'
import fixedPlayer from '~/components/fixedPlayer.vue'
moment.locale('zh-cn')

export default {
  components: {
    commonHeader,
    fixedPlayer
  },
  data() {
    return {
      locale: zhCN
    }
  },
  computed: {
    isDashboardRoute() {
      const path = this.$route.path
      if (path === '/dashboard') {
        return false
      } else if (path.match(/\/dashboard\/(.*)/) || path.match(/\/manage(.*)/)) {
        return true
      }
      return false
    }
  }
}
</script>
