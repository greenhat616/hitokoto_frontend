<template>
  <a-menu
    :mode="mode"
    :default-open-keys="menuOpened"
    :selected-keys="menuSelected"
  >
    <template v-for="item in menuList">
      <a-sub-menu v-if="item.isSubMenu" :key="item.key">
        <span slot="title">
          <a-icon
            v-if="item.iconType != '' && !item.isIconFont"
            :type="item.iconType"
          />
          <icon-font
            v-if="item.iconType != '' && item.isIconFont"
            :type="item.iconType"
          />
          <span>{{ item.title }}</span>
        </span>
        <a-menu-item
          v-for="subItem in item.subMenu"
          :key="subItem.key"
        >
          <nuxt-link :to="baseTarget + subItem.target">
            <a-icon
              v-if="subItem.iconType != '' && !subItem.isIconFont"
              :type="subItem.iconType"
            />
            <icon-font
              v-if="subItem.iconType != '' && subItem.isIconFont"
              :type="subItem.iconType"
            />
            {{ subItem.title }}
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item
        v-else
        :key="item.key"
      >
        <nuxt-link :to="baseTarget + item.target">
          <a-icon
            v-if="item.iconType != '' && !item.isIconFont"
            :type="item.iconType"
          />
          <icon-font
            v-if="item.iconType != '' && item.isIconFont"
            :type="item.iconType"
          />
          {{ item.title }}
        </nuxt-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<style lang="less">

</style>
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
    menuList: {
      required: true,
      type: Array
    },
    baseTarget: {
      required: true,
      type: String
    },
    mode: {
      default: 'inline',
      type: String
    },
    menuSelected: {
      required: true,
      type: Array
    },
    menuOpened: {
      required: true,
      type: Array
    }
  }
}
</script>
