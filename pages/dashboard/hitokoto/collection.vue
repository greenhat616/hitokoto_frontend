<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
  </dashboard-layout>
</template>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'
export default {
  components: {
    dashboardLayout
  },
  head() {
    return {
      title: '我的收藏'
    }
  },
  data() {
    return {
      menuSelected: ['sentence-collection'],
      menuOpened: ['sentence'],
      form: this.$form.createForm(this)
    }
  }
}
</script>
