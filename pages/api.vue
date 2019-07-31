<template>
  <a-row style="margin-top:5em; margin-bottom: 5em;">
    <a-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 16, offset:4}">
      <div class="shadow-background" :style="!isLoaded ? 'height: 24em;' : ''">
        <a-row v-if="isLoaded" class="full-height markdown-padding">
          <div class="content-head">
            <h1>接口说明</h1>
            <h2>特别赞助</h2>
            <p><a target="_blank" href="https://www.dogecloud.com/"><img v-lazy="'https://piccdn.freejishu.com/images/2019/07/21/PnY445.png'" width="250"></a></p>
            <p>接口在 24 小时中处理请求 <b v-text="requestNumber">∞</b> 次</p>
          </div>
          <div class="markdown-content" v-html="content" />
        </a-row>
        <a-row v-if="!isLoaded" class="full-height" type="flex" align="middle" justify="center">
          <a-icon type="loading" :style="{fontSize: '3em'}" />
        </a-row>
      </div>
    </a-col>
  </a-row>
</template>
<style lang="less">
.full-height {
  height: 100%;
}

.markdown-padding {
  padding: 2em 4em;
}

.overflow-table {
  table {
    margin-bottom: 20px;
  }
  overflow: auto;
  margin-bottom: 20px;
}

.shadow-background {
  background: white;
  /* box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);*/
  border: 1px solid #e8e8e8;
}
</style>
<script>

export default {
  data() {
    return {
      isLoaded: false,
      /*eslint-disable*/
      sourceMarkdown: ``,
      content: '',
      requestNumber: 0
    }
  },
  mounted: function () {
    const _this = this
    this.$axios.get('/api.md')
      .then(response => {
        _this.isLoaded = true
        _this.content = _this.marked(response.data)
      })
      .catch(e => {
        window.console.error(e)
        _this.isLoaded = true
        _this.content = '<h1><b>获取接口内容失败。 请刷新页面重试。</b></h1>'
      })
    window.console.info('我鸽了')
  },
  head() {
    return {
      title: '接口说明'
    }
  },
}
</script>
