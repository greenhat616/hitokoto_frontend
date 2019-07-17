<template>
  <a-layout>
    <a-layout-header>
      <a-row type="flex" align="middle">
        <a-col :span="4">
          <a-row type="flex" align="middle" justify="start" :gutter="24">
            <hitokoto-icon :style="{fontSize: '3em'}" />
            <a-col :offset="1">
              <div class="big-font">Hitokoto</div>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="11" :offset="9">
          <a-menu mode="horizontal" v-model="current">
            <a-menu-item key="home">
              <a-icon type="home" />首页
            </a-menu-item>
            <a-menu-item key="api">
              <a-icon type="api" />接口说明
            </a-menu-item>
            <a-menu-item key="about">
              <a-icon type="global" />接口说明
            </a-menu-item>
            <a-sub-menu>
              <span slot="title">
                <a-avatar shape="circle" size="large">GU</a-avatar> 游客
                <a-icon type="down" />
              </span>
              <a-menu-item key="login">登录</a-menu-item>
              <a-menu-item key="register">注册</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
</template>
<style>
</style>
<script>
import HitokotoIcon from '~/components/HitokotoIcon.vue'

export default {
  props: ['header'],
  components: {
    HitokotoIcon
  },
  data() {
    return {
      current: ['home']
    }
  }
}
</script>
