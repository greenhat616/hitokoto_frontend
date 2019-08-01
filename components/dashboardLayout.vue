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
        <generate-menu-list
          class="mobile-menu"
          mode="inline"
          :menu-list="menuList"
          :base-target="baseTarget"
          :menu-opened="menuOpened"
          :menu-selected="menuSelected"
        />
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
          <generate-menu-list
            class="siderbar-menu-inner"
            mode="inline"
            :menu-list="menuList"
            :base-target="baseTarget"
            :menu-opened="menuOpened"
            :menu-selected="menuSelected"
          />
        </div>
      </a-col>
      <a-col
        :xs="{offset: 3, span: 18 }"
        :sm="{offset: 2, span: 20 }"
        :md="isAutoSwitch ? {span: 18, offset: 1} : {span: 24, offset: 0}"
        :lg="isAutoSwitch ? {span: 19, offset: 1} : {span: 24, offset: 0}"
      >
        <div class="dashboard-layout-content" style="overflow: hidden;">
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
import generateMenuList from '~/components/generateMenuList.vue'

export default {
  components: {
    generateMenuList
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
      baseTarget: '/dashboard',
      menuList: [
        {
          isSubMenu: false,
          title: '面板概览',
          target: '',
          iconType: 'dashboard',
          isIconFont: false,
          requireAuthority: 'user',
          key: 'dashboard',
          subMenu: []
        },
        {
          isSubMenu: true,
          title: '我的一言',
          target: '',
          iconType: 'icon-hashtag',
          isIconFont: true,
          requireAuthority: 'user',
          key: 'sentence',
          subMenu: [
            {
              isSubMenu: false,
              title: '状态概览',
              target: '/hitokoto',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'sentence-overlook', // TODO: 把 Overlook 改成 Overview
              subMenu: []
            },
            {
              isSubMenu: false,
              title: '我的收藏',
              target: '/hitokoto/collection',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'sentence-collection',
              subMenu: []
            },
            {
              isSubMenu: false,
              title: '添加一言',
              target: '/hitokoto/append',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'sentence-append',
              subMenu: []
            }
          ]
        },
        {
          isSubMenu: true,
          title: '工单系统',
          target: '',
          iconType: 'profile',
          isIconFont: false,
          requireAuthority: 'user',
          key: 'ticket',
          subMenu: [
            {
              isSubMenu: false,
              title: '我的工单',
              target: '/ticket',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'ticket-list',
              subMenu: []
            },
            {
              isSubMenu: false,
              title: '创建工单',
              target: '/ticket/create',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'ticket-append',
              subMenu: []
            }
          ]
        },
        {
          isSubMenu: true,
          title: '开发者中心',
          target: '',
          iconType: 'tool',
          isIconFont: false,
          requireAuthority: 'user',
          key: 'dev',
          subMenu: [
            {
              isSubMenu: false,
              title: '授权管理',
              target: '/dev/management',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'accss-management',
              subMenu: []
            },
            {
              isSubMenu: false,
              title: '操作记录',
              target: '/dev/log',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'operate-list',
              subMenu: []
            },
            {
              isSubMenu: false,
              title: '操作记录',
              target: '/dev/interface',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'interface-useage',
              subMenu: []
            }
          ]
        },
        {
          isSubMenu: true,
          title: '用户中心',
          target: '',
          iconType: 'user',
          isIconFont: false,
          requireAuthority: 'user',
          key: 'user',
          subMenu: [
            {
              isSubMenu: false,
              title: '账户安全',
              target: '/user/security',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'user-security',
              subMenu: []
            },
            {
              isSubMenu: false,
              title: '偏好设置',
              target: '/user/preference',
              iconType: '',
              isIconFont: false,
              requireAuthority: 'user',
              key: 'user-preference',
              subMenu: []
            }
          ]
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
