<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>偏好设置</h1>
  </dashboard-layout>
</template>
<style lang="less">
</style>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: 'user-preference',
      menuOpened: 'user'
    }
  },
  head() {
    return {
      title: '偏好设置'
    }
  }
}
</script>
