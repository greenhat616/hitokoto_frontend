<style>
  .hitokoto-header .ant-drawer-body {
    padding: 0;
  }

</style>
<template>
  <div>
    <a-layout-header class="hitokoto-header">
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
          <a-menu mode="horizontal" :selected-keys="getCurrent" class='menu-site'>
            <a-menu-item key="home">
              <nuxt-link to="/"><a-icon type="home" />首页</nuxt-link>
            </a-menu-item>
            <a-menu-item key="api">
              <nuxt-link to="/api"><a-icon type="api" />接口说明</nuxt-link>
            </a-menu-item>
            <a-menu-item key="about">
              <nuxt-link to="/about"><a-icon type="global" />关于我们</nuxt-link>
            </a-menu-item>
            <a-menu-item key="login">
              <nuxt-link to="/auth/login"><a-icon type="user" />登录</nuxt-link>
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-drawer placement="right" :closable="false" @close="onClose" :visible="menu" wrapClassName="hitokoto-header">
      <a-menu mode="vertical" :selected-keys="getCurrent">
        <a-menu-item key="home">
          <a-icon type="home" />首页
        </a-menu-item>
        <a-menu-item key="api">
          <a-icon type="api" />接口说明
        </a-menu-item>
        <a-menu-item key="about">
          <a-icon type="global" />接口说明
        </a-menu-item>
        <a-menu-item key="login">登录</a-menu-item>
      </a-menu>
    </a-drawer>
  </div>
</template>
<style>

</style>
<script>
import HitokotoIcon from '~/components/HitokotoIcon.vue'

export default {
  components: {
    HitokotoIcon
  },
  computed: {
    getCurrent: function () {
      return this.$store.state.menuSelected.current
    }
  },
  data() {
    return {
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
