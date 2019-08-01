<template>
  <manage-layout :menu-opened="menuOpened" :menu-selected="menuSelected">
    <h1>咕咕咕</h1>
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
      menuSelected: ['overview']
    }
  }
}
</script>
