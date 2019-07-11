<template>
  <hitokoto-icon/>
</template>
<style>
</style>
<script>
import HitokotoSvg from 'static/icon.svg'

const HitokotoIcon = {
  template: `
    <a-icon :component="HitokotoSvg" />
  `,
  data() {
    return {
      HitokotoSvg
    }
  }
}

export default {
  components: {
    HitokotoIcon
  }
}
</script>
