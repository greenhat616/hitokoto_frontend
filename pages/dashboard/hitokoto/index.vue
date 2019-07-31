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
      title: '状态概览'
    }
  },
  data() {
    return {
      menuSelected: ['sentence-overlook'],
      menuOpened: ['sentence'],
      form: this.$form.createForm(this)
    }
  }
}
</script>
