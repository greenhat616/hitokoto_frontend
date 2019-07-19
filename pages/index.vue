<template>
  <div>

  </div>
</template>
<script>
export default {
  layout: 'home',
  mounted: function () {
    this.$store.commit('menuSelected/updateCurrent', 'home')
  },
  data() {
    return {
    }
  }
}
</script>
