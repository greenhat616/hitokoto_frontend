<template>
  <div class="hitokoto-header" :class="{ 'is-home': $route.path === '/', 'is-dashboard': isDashboardRoute }">
    <a-layout-header class="hitokoto-header-inner">
      <a-row>
        <a-col :xs="{span: 12, offset: 6}" :sm="{span: 6, offset: 9}" :md="{span:4, offset: 0}">
          <div class="logo">
            <hitokoto-icon class="logo-icon" :style="{fontSize: '32px'}" />
            <span class="logo-text">Hitokoto</span>
          </div>
        </a-col>
        <a-col :xs="{span:4, offset: 2}" :sm="{span: 4, offset: 5}" :md="{span: 0}">
          <a-row type="flex" align="middle" justify="end">
            <a-col>
              <a-button class="menu-button" @click="toggleMenu">
                <a-icon type="menu" />
              </a-button>
            </a-col>
          </a-row>
        </a-col>
        <a-col :xs="{span: 0}" :sm="{span: 0}" :md="{span: 11, offset: 9}">
          <a-menu mode="horizontal" :selected-keys="[selectedKey]" class="menu-site">
            <a-menu-item key="/">
              <nuxt-link to="/">
                <a-icon type="home" />
                首页
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="/api">
              <nuxt-link to="/api">
                <a-icon type="api" />
                接口说明
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="/about">
              <nuxt-link to="/about">
                <a-icon type="global" />
                关于我们
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="/auth/login">
              <nuxt-link to="/auth/login">
                <a-icon type="user" />
                用户登录
              </nuxt-link>
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-drawer wrap-class-name="hitokoto-header-drawer" placement="right" :closable="false" :visible="menu" @close="onClose">
      <a-menu mode="vertical" :selected-keys="[selectedKey]">
        <a-menu-item key="/">
          <nuxt-link to="/">
            <a-icon type="home" />
            首页
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="/api">
          <nuxt-link to="/api">
            <a-icon type="api" />
            接口说明
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <nuxt-link to="/about">
            <a-icon type="global" />
            关于我们
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="/auth/login">
          <nuxt-link to="/auth/login">
            <a-icon type="user" />
            用户登录
          </nuxt-link>
        </a-menu-item>
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
  data() {
    return {
      menu: false,
      selectedKey: ''
    }
  },
  computed: {
    isDashboardRoute() {
      const path = this.$route.path
      if (path.match(/\/dashboard(.*)/) || path.match(/\/manage(.*)/)) {
        return true
      }
      return false
    }
  },
  watch: {
    '$route'(to, from) {
      this.selectedKey = this.$route.path
    }
  },
  created() {
    this.selectedKey = this.$route.path
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
