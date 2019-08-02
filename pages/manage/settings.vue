<template>
  <manage-layout :menu-opened="menuOpened" :menu-selected="menuSelected">
    <h1>站点设置</h1>
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
      menuSelected: ['settings']
    }
  },
  head() {
    return {
      title: '站点设置 - 管理面板'
    }
  }
}
</script>
