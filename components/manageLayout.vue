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
        v-sticky
        class="menu-siderbar"
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
      baseTarget: '/manage',
      menuList: [
        {
          isSubMenu: false,
          title: '状态概览',
          target: '/',
          key: 'overview',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'admin',
          subMenu: []
        },
        {
          isSubMenu: false,
          title: '公告管理',
          target: '/announcements',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'admin',
          key: 'announcements',
          subMenu: []
        },
        {
          isSubMenu: false,
          title: '用户管理',
          target: '/users',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'admin',
          key: 'users',
          subMenu: []
        },
        {
          isSubMenu: false,
          title: '工单管理',
          target: '/tickets',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'admin',
          key: 'tickets',
          subMenu: []
        },
        {
          isSubMenu: false,
          title: '句子审核',
          target: '/sentences',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'reviewer',
          key: 'sentence-review',
          subMenu: []
        },
        {
          isSubMenu: false,
          title: '句子管理',
          target: '/sentence/review',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'admin',
          key: 'sentences',
          subMenu: []
        },
        {
          isSubMenu: false,
          title: '站点设置',
          target: '/settings',
          iconType: '',
          isIconFont: false,
          requireAuthority: 'admin',
          key: 'settings',
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
