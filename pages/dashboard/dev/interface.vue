<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>接口说明</h1>
    <a-row v-if="isLoaded">
      <a-col :md="20" :lg="20">
        <div class="markdown-content" v-html="content" />
      </a-col>
    </a-row>
    <a-row v-if="!isLoaded">
      <a-col :md="15" :lg="10">
        <a-row
          class="full-height"
          type="flex"
          align="middle"
          justify="center"
          style="min-height: 40vh"
        >
          <a-spin tip="加载中..." size="large" />
        </a-row>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>

<script>
import dashboardLayout from '~/components/dashboardLayout.vue'

export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['interface-useage'],
      menuOpened: ['dev'],
      isLoaded: false,
      content: ''
    }
  },
  mounted() {
    const _this = this
    this.$axios.get('/dev-interface.md')
      .then((response) => {
        _this.isLoaded = true
        _this.content = _this.marked(response.data)
      })
      .catch((e) => {
        window.console.error(e)
        _this.isLoaded = true
        _this.content = '<h1><b>获取接口内容失败。 请刷新页面重试。</b></h1>'
      })
    window.console.info('我鸽了')
  }
}
</script>
