<template>
<a-row>
  <a-col :xs="{span: 20, offset:2}" :md="{span: 16, offset:4}">
    <div class="shadow-background">
      <a-row v-if="is_load" class="full-height markdown-padding" type="flex" align="top" justify="start">
        <div v-html="content"></div>
      </a-row>
      <a-row v-if="!is_load" class="full-height" type="flex" align="middle" justify="center">
        <a-icon type="loading" :style="{fontSize: '2.5em'}"></a-icon>
      </a-row>
    </div>
  </a-col>
</a-row>
</template>
<style>
.full-height {
  height: 100%;
}

.markdown-padding {
  padding: 2em 4em;
}

.shadow-background {
  background: white;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
  height: 24em;
}
</style>
<script>
import marked from 'marked'

export default {
  data() {
    return {
      is_load: false,
      test_get: '# gugugu\n ## gugu \n### gugugu',
      content: ''
    }
  },
  mounted: function () {
    const _this = this
    setTimeout(() => {
      _this.is_load = true
      _this.content = marked(_this.test_get)
    }, 2000)
    window.console.info('我鸽了')
  }
}
</script>
