<template>
  <a-locale-provider :locale="locale">
    <a-layout class="home-layout">
      <home-header />
      <nuxt />
      <fixed-player />
      <page-footer />
    </a-layout>
  </a-locale-provider>
</template>
<script>
import moment from 'moment'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import homeHeader from '~/components/homeHeader.vue'
import fixedPlayer from '~/components/fixedPlayer.vue'
import pageFooter from '~/components/footer.vue'
moment.locale('zh-cn')

export default {
  components: {
    homeHeader,
    fixedPlayer,
    pageFooter
  },
  data() {
    return {
      locale: zhCN
    }
  }
}
</script>
