<template>
  <div class="dashboard-main">
    <div class="mobile-siderbar-menu">
      <a-drawer
        placement="left"
        wrap-class-name="mobile-siderbar-menu-drawer"
        :closable="false"
        :visible="drawerOpened"
      >
        <div slot="handle" :class="isAutoSwitch ? 'drawer-handle drawer-handle-auto' : 'drawer-handle'" @click="openOrCloseMenuDrawer">
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
              <a-icon type="read" />
              <span>
                我的一言
              </span>
            </span>
            <a-menu-item key="sentence-overlook">
              状态概览
            </a-menu-item>
            <a-menu-item key="sentence-append">
              提交一言
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
              工单列表
            </a-menu-item>
            <a-menu-item key="ticket-append">
              发表工单
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
              授权管理
            </a-menu-item>
            <a-menu-item key="operate-list">
              操作记录
            </a-menu-item>
            <a-menu-item key="interface-useage">
              接口说明
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="user">
            <span slot="title">
              <a-icon type="user" />
              <span>
                用户中心
              </span>
            </span>
            <a-menu-item key="client-setting">
              网页设置
            </a-menu-item>
            <a-menu-item key="user-security">
              账户安全
            </a-menu-item>
            <a-menu-item key="user-setting">
              账户设置
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-drawer>
    </div>
    <a-row>
      <a-col :xs="0" :sm="0" :md="isAutoSwitch ? 5 : 0" :lg="isAutoSwitch ? 4 : 0">
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
                <a-icon type="read" />
                <span>
                  我的一言
                </span>
              </span>
              <a-menu-item key="sentence-overlook">
                状态概览
              </a-menu-item>
              <a-menu-item key="sentence-append">
                提交一言
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
                工单列表
              </a-menu-item>
              <a-menu-item key="ticket-append">
                发表工单
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
                授权管理
              </a-menu-item>
              <a-menu-item key="operate-list">
                操作记录
              </a-menu-item>
              <a-menu-item key="interface-useage">
                接口说明
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="user">
              <span slot="title">
                <a-icon type="user" />
                <span>
                  用户中心
                </span>
              </span>
              <a-menu-item key="client-setting">
                网页设置
              </a-menu-item>
              <a-menu-item key="user-security">
                账户安全
              </a-menu-item>
              <a-menu-item key="user-setting">
                账户设置
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-col>
      <a-col :xs="{offset: 3, span: 18 }" :sm="{offset: 2, span: 20 }" :md="isAutoSwitch ? {span: 18, offset: 1} : 24" :lg="isAutoSwitch ? {span: 19, offset: 1} : 0">
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
<style>
.ant-layout {
  background: #fff;
}
</style>

<script>
export default {
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
      drawerOpened: false
    }
  },
  methods: {
    openOrCloseMenuDrawer() {
      this.drawerOpened = !this.drawerOpened
    }
  }
}
</script>
