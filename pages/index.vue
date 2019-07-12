<template>
<a-layout>
  <a-layout-header>
    <a-row type="flex" align="middle">
      <a-col :span="4">
        <a-row type="flex" align="middle" justify="left" :gutter="24">
            <hitokoto-icon :style="{fontSize: '3em'}" />
          <a-col :offset="1">
            <div class="big-font">Hitokoto</div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="8" :offset="6">
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
      <a-col :span="3" :offset="3">
        <a-avatar shape="circle" size="large" >GU</a-avatar>
        <a-button type="primary">登陆</a-button>
      </a-col>
    </a-row>
  </a-layout-header>
</a-layout>
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
