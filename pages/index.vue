<template>
  <header>
      <div>
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="home">
            <a-icon type="home" />首页
          </a-menu-item>
          <a-menu-item key="api">
            <a-icon type="api" />接口说明
          </a-menu-item>
          <a-menu-item key="about">
            <a-icon type="global" />接口说明
          </a-menu-item>
        </a-menu>
      </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail']
    }
  }
}
</script>
