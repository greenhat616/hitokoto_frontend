<template>
  <a-locale-provider :locale="locale">
    <a-layout>
      <common-header />
      <nuxt />
      <fixed-player />
    </a-layout>
  </a-locale-provider>
</template>
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
  }
}
</script>
