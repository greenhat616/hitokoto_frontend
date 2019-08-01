<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>我的收藏</h1>
    <a-row>
      <a-col span="22">
        <a-table :columns="columns" :data-source="data" bordered>
          <template slot-scope="text, record" solt="action">
            <a href="javascript:;" @click="delete(record.key)">删除</a>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>
<style lang="less">
</style>
<script>
import dashboardLayout from '~/components/dashboardLayout.vue'

const columns = [{
  title: '一言',
  dataIndex: 'hitoko',
  key: 'hitoko'
}, {
  title: '来源',
  dataIndex: 'source',
  key: 'source'
}, {
  title: '分类',
  dataIndex: 'category',
  key: 'category'
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  scopedSlots: { customRender: 'action' }
}]

const data = [{
  key: '1',
  hitoko: 'gugugugug',
  source: 'buzd',
  category: '动漫'
}, {
  key: '2',
  hitoko: '77777',
  source: 'buzd',
  category: '动漫'
}, {
  key: '3',
  hitoko: '456',
  source: 'buzd',
  category: '动漫'
}, {
  key: '4',
  hitoko: '123',
  source: 'buzd',
  category: '动漫'
}, {
  key: '5',
  hitoko: 'gugugugug',
  source: 'buzd',
  category: '动漫'
}]

export default {
  components: {
    dashboardLayout
  },
  head() {
    return {
      title: '我的收藏'
    }
  },
  data() {
    return {
      menuSelected: ['sentence-collection'],
      menuOpened: ['sentence'],
      columns,
      data
    }
  },
  methods: {
    delete(key) {

    }
  }
}
</script>
