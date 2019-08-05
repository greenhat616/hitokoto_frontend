<template>
  <manage-layout :menu-opened="menuOpened" :menu-selected="menuSelected">
    <h1>公告管理</h1>
  </manage-layout>
</template>
<style lang="less">

</style>

<script>
import manageLayout from '~/components/manageLayout.vue'
export default {
  components: {
    manageLayout
  },
  data() {
    return {
      menuOpened: [],
      menuSelected: ['announcements']
    }
  },
  head() {
    return {
      title: '公告管理 - 管理面板'
    }
  }
}
</script>
