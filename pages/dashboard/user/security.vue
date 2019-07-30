<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>账户安全</h1>
  </dashboard-layout>
</template>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['user-security'],
      menuOpened: ['user']
    }
  },
  head() {
    return {
      title: '账户安全'
    }
  }
}
</script>
