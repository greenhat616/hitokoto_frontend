<template>
  <manage-layout :menu-opened="menuOpened" :menu-selected="menuSelected">
    <h1>句子管理</h1>
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
      menuSelected: ['sentences']
    }
  },
  head() {
    return {
      title: '句子管理 - 管理面板'
    }
  }
}
</script>
