<template>
  <div class="dashboard-main">
    <div class="mobile-siderbar-menu">
      <a-drawer
        placement="left"
        wrap-class-name="mobile-siderbar-menu-drawer"
        :closable="false"
        :visible="drawerOpened"
      >
        <div
          slot="handle"
          :class="isAutoSwitch ? 'drawer-handle drawer-handle-auto' : 'drawer-handle'"
          @click="openOrCloseMenuDrawer"
        >
          <i class="drawer-handle-icon" />
        </div>
        <a-menu
          mode="inline"
          class="mobile-menu"
          :default-open-keys="menuOpened"
          :selected-keys="menuSelected"
        >
          <a-menu-item key="dashboard">
            <nuxt-link to="/dashboard">
              <a-icon type="dashboard" />
              面板概览
            </nuxt-link>
          </a-menu-item>
          <a-sub-menu key="sentence">
            <span slot="title">
              <icon-font type="icon-hashtag" />
              <span>
                我的一言
              </span>
            </span>
            <a-menu-item key="sentence-overlook">
              <nuxt-link to="/dashboard/hitokoto">
                状态概览
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="sentence-collection">
              <nuxt-link to="/dashboard/hitokoto/collection">
                我的收藏
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="sentence-append">
              <nuxt-link to="/dashboard/hitokoto/append">
                添加一言
              </nuxt-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="ticket">
            <span slot="title">
              <a-icon type="profile" />
              <span>
                工单系统
              </span>
            </span>
            <a-menu-item key="ticket-list">
              <nuxt-link to="/dashboard/ticket">
                我的工单
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="ticket-append">
              <nuxt-link to="/dashboard/ticket/create">
                创建工单
              </nuxt-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="dev">
            <span slot="title">
              <a-icon type="tool" />
              <span>
                开发者中心
              </span>
            </span>
            <a-menu-item key="accss-management">
              <nuxt-link to="/dashboard/dev/management">
                授权管理
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="operate-list">
              <nuxt-link to="/dashboard/dev/log">
                操作记录
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="interface-useage">
              <nuxt-link to="/dashboard/dev/interface">
                接口说明
              </nuxt-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="user">
            <span slot="title">
              <a-icon type="user" />
              <span>
                用户中心
              </span>
            </span>
            <a-menu-item key="user-security">
              <nuxt-link to="/dashboard/user/security">
                账户安全
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="user-setting">
              <nuxt-link to="/dashboard/user/setting">
                账户设置
              </nuxt-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-drawer>
    </div>
    <a-row>
      <a-col
        :xs="0"
        :sm="0"
        :md="isAutoSwitch ? 5 : 0"
        :lg="isAutoSwitch ? 4 : 0"
      >
        <div class="siderbar-menu">
          <a-menu
            class="siderbar-munu-inner"
            mode="inline"
            :default-open-keys="menuOpened"
            :selected-keys="menuSelected"
          >
            <a-menu-item key="dashboard">
              <nuxt-link to="/dashboard">
                <a-icon type="dashboard" />
                面板概览
              </nuxt-link>
            </a-menu-item>
            <a-sub-menu key="sentence">
              <span slot="title">
                <icon-font type="icon-hashtag" />
                <span>
                  我的一言
                </span>
              </span>
              <a-menu-item key="sentence-overlook">
                <nuxt-link to="/dashboard/hitokoto">
                  状态概览
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="sentence-collection">
                <nuxt-link to="/dashboard/hitokoto/collection">
                  我的收藏
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="sentence-append">
                <nuxt-link to="/dashboard/hitokoto/append">
                  添加一言
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="ticket">
              <span slot="title">
                <a-icon type="profile" />
                <span>
                  工单系统
                </span>
              </span>
              <a-menu-item key="ticket-list">
                <nuxt-link to="/dashboard/ticket">
                  我的工单
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="ticket-append">
                <nuxt-link to="/dashboard/ticket/create">
                  创建工单
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="dev">
              <span slot="title">
                <a-icon type="tool" />
                <span>
                  开发者中心
                </span>
              </span>
              <a-menu-item key="accss-management">
                <nuxt-link to="/dashboard/dev/management">
                  授权管理
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="operate-list">
                <nuxt-link to="/dashboard/dev/log">
                  操作记录
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="interface-useage">
                <nuxt-link to="/dashboard/dev/interface">
                  接口说明
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="user">
              <span slot="title">
                <a-icon type="user" />
                <span>
                  用户中心
                </span>
              </span>
              <a-menu-item key="user-security">
                <nuxt-link to="/dashboard/user/security">
                  账户安全
                </nuxt-link>
              </a-menu-item>
              <a-menu-item key="user-setting">
                <nuxt-link to="/dashboard/user/setting">
                  账户设置
                </nuxt-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-col>
      <a-col
        :xs="{offset: 3, span: 18 }"
        :sm="{offset: 2, span: 20 }"
        :md="isAutoSwitch ? {span: 18, offset: 1} : {span: 24, offset: 0}"
        :lg="isAutoSwitch ? {span: 19, offset: 1} : {span: 24, offset: 0}"
      >
        <div class="dashboard-layout-content">
          <slot>
            <h1>
              这是默认显示内容
            </h1>
          </slot>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1315053_91wjjfbpuh6.js'
})
export default {
  components: {
    IconFont
  },
  props: {
    menuSelected: {
      required: true,
      type: Array
    },
    menuOpened: {
      required: true,
      type: Array
    },
    isAutoSwitch: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      drawerOpened: false,
      menuList: [
        // 埋坑， 动态生产 Menu
        {
          isSubMenu: false,
          title: '面板概览',
          href: '/dashboard',
          key: 'dashboard'
        },
        {
          isSubMenu: true,
          title: '我的一言',
          iconType: '',
          isFontIcon: false,
          key: 'hitokoto',
          subMenu: []
        }
      ]
    }
  },
  methods: {
    openOrCloseMenuDrawer() {
      this.drawerOpened = !this.drawerOpened
    }
  }
}
</script>
