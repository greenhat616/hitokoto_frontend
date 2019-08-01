<template>
  <footer class="home-footer">
    Sponsored by <a-tooltip placement="topRight">
      <template slot="title">
        <span>感谢为接口提供动态加速服务</span>
      </template>
      <a href="https://www.dogecloud.com/" target="_blank">DogeCloud</a>
    </a-tooltip> • 沪ICP备16031287号-1 • <a-tooltip placement="topRight">
      <template slot="title">
        <span>QQ 群：70029304 <br> 邮箱：i@loli.online</span>
      </template>
      &copy; {{ moment().format('YYYY') }} MoeTeam
    </a-tooltip>
  </footer>
</template>
<style lang="less">
  .home-footer {
    text-align: center;
    padding: 0.45em;
  }
</style>
<script>
import moment from 'moment'
export default {
  methods: {
    moment
  }
}
</script>
