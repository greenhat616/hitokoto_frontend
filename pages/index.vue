<template>
  <a-layout>
    <a-layout-header>
      <a-row>
        <a-col :xs="{span: 12, offset: 6}" :sm="{span: 6, offset: 9}" :md="{span:4, offset: 0}">
          <div class="logo">
            <hitokoto-icon :style="{fontSize: '3em'}" />
            <span class="big-font">Hitokoto</span>
          </div>
        </a-col>
        <a-col :xs="{span:4, offset: 2}" :sm="{span: 4, offset: 5}" :md="{span: 0}">
          <a-button @click="toggleMenu" style="margin-bottom: 16px">
            <a-icon type="bars" />
          </a-button>
        </a-col>
        <a-col :xs="{span: 0}" :sm="{span: 0}" :md="{span: 11, offset: 9}">
          <a-menu mode="horizontal" v-model="current" style="float: right;">
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
                <a-avatar icon="user" />游客
                <a-icon type="down" />
              </span>
              <a-menu-item key="login">登录</a-menu-item>
              <a-menu-item key="register">注册</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-drawer placement="right" :closable="false" @close="onClose" :visible="menu" wrapClassName="hitokoto-header">
      <a-menu mode="inline" v-model="current">
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
            <a-avatar icon="user" /> 游客
          </span>
          <a-menu-item key="login">登录</a-menu-item>
          <a-menu-item key="register">注册</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-drawer>
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
      current: ['home'],
      menu: false
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu
    },
    onClose() {
      this.menu = false
    }
  }
}
</script>
<style>
  .hitokoto-header .ant-drawer-body {
    padding: 0;
  }
</style>
