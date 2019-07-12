<template>
<a-layout>
  <a-layout-header>
    <a-row type="flex" align="middle">
      <a-col :span="4">
        <a-row type="flex" align="middle" justify="start" :gutter="24">
          <hitokoto-icon :style="{fontSize: '3em'}" />
          <a-col :offset="1">
            <div class="big-font">
              Hitokoto
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="7" :offset="9">
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
      <a-col :span="4">
        <a-dropdown>
          <a-row>
            <a href="#">
              <a-avatar shape="circle" size="large">GU</a-avatar>
              <a href="#">游客</a>
            </a>
          </a-row>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="#">操作1</a>
            </a-menu-item>
            <!-- <a-menu-item >
              <a href="#">操作2</a>
            </a-menu-item> -->
            <a-menu-divider />
            <a-menu-item key="1">
              <a href="#">登陆</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
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
