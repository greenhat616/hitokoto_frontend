<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>工单概览</h1>
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
      menuSelected: ['ticket-list'],
      menuOpened: ['ticket']
    }
  }
}
</script>
