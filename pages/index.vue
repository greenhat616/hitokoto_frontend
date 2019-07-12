<template>
  <a-layout>
    <a-layout-header>
      <a-row>
        <a-col :span="6">
          <hitokoto-icon :style="{fontSize: '3em'}" /> Hitokoto 一言
        </a-col>
        <a-col :span="18">
          <a-menu mode="horizontal">
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
        </a-col>
        <a-col></a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
<!-- <header>
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
  </header> -->
</template>
<style>

</style>
<script>
import HitokotoIcon from '../components/HitokotoIcon.vue'

export default {
  props: ['header'],
  components: {
    HitokotoIcon
  }
}
</script>
