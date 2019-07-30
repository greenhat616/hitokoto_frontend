<template>
  <dashboard-layout :menu-selected="menuSelected" :menu-opened="menuOpened">
    <h1>操作日记</h1>
    <a-row>
      <a-col :md="20" :lg="20">
        <div class="operate-log-table-outer">
          <a-table :columns="columns" :data-source="data">
            <template slot="result" slot-scope="text">
              <a href="javascript:;" @click="viewResult(text)">查看数据</a>
            </template>
          </a-table>
        </div>
      </a-col>
    </a-row>
  </dashboard-layout>
</template>

<style lang="less">
</style>

<script>
import moment from 'moment'
import dashboardLayout from '~/components/dashboardLayout.vue'

const columns = [
  {
    dataIndex: 'id',
    key: 'id',
    title: '标识'
  },
  {
    title: '触发者',
    key: 'user',
    dataIndex: 'user'
  },
  {
    title: '操作名',
    dataIndex: 'operate',
    key: 'operate'
  },
  {
    title: '触发时间',
    key: 'createdTime',
    dataIndex: 'createdTime',
    sorter: (a, b) => moment(a.createdTime, 'YYYY-MM-DD HH:mm').diff(moment(b.createdTime, 'YYYY-MM-DD HH:mm'))
  },
  {
    title: '操作结果',
    dataIndex: 'resultId',
    key: 'result',
    scopedSlots: { customRender: 'result' }
  }
]

const data = [
  {
    key: '1',
    id: '1',
    operate: '新增一言',
    createdTime: '2019-07-20 19:00',
    user: '你'
  },
  {
    key: '2',
    id: '2',
    operate: '新增一言',
    createdTime: '2019-07-20 19:01',
    user: '你'
  },
  {
    key: '3',
    id: '3',
    operate: '新增一言',
    createdTime: '2019-07-20 19:02',
    user: '你'
  },
  {
    key: '4',
    id: '4',
    operate: '新增一言',
    createdTime: '2019-07-20 19:03',
    user: '你'
  }
]

export default {
  components: {
    dashboardLayout
  },
  data() {
    return {
      menuSelected: ['operate-list'],
      menuOpened: ['dev'],
      columns,
      data
    }
  },
  methods: {
    viewResult(resultId) {

    }
  }
}
</script>
