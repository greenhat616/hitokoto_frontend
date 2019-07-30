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
  beforeCreate: function () {
    this.$store.commit('menuSelected/updateCurrent', 'home')
  }
}
</script>
