<template>
  <div />
</template>
<script>
export default {
  layout: 'home',
  data() {
    return {
    }
  },
  mounted: function () {
    this.$store.commit('menuSelected/updateCurrent', 'home')
  }
}
</script>
